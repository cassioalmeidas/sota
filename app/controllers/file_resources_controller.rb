class FileResourcesController < ApplicationController
  before_action :set_research

  def create
    @file = @research.file_resources.new(file_resources_params)

    if @file.valid?
      @file.save
      redirect_to retrieve_papers_research_path(@research), notice: t('.success', default: 'File resource was successfully uploaded')
    else
      respond_to do |format|
        format.html { redirect_to retrieve_papers_research_path(@research), notice: t('.failure', default: 'Oops!') }
        format.json { render json: @file.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @file = @research.file_resources.find(params[:id])
    @file.destroy
    respond_to do |format|
      format.html { redirect_to retrieve_papers_research_path(@research), notice: t('.success', default: 'File resource was successfully destroyed')}
      format.json { head :no_content }
    end
  end

  def import 
    @file = @research.file_resources.find(params[:id])
    @research.import_papers(@file.file.open())
    @file.update_columns(imported: true)
    redirect_to retrieve_papers_research_path(@research), notice: t('.success', default: 'File resource was successfully imported')
  end

  private 
    def set_research
      @research = Research.find(params[:research_id])
    end

    def file_resources_params
      params.require(:file_resource).permit(:research_id, :file)
    end
end