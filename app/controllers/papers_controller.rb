class PapersController < ApplicationController
  before_action :set_paper, only: [:show, :edit, :update, :destroy]


  def index
    params["columns"] ||= { "0" => {"data" => "" } }
    params["length"]  ||= -1
    respond_to do |format|
      format.json { render json: PaperDatatable.new(params, research_id: params[:research_id])}
    end
  end

  def show
  end


  def new
    @paper = Paper.new
  end


  def edit
  end

  def create
    @paper = Paper.new(paper_params)

    respond_to do |format|
      if @paper.save
        format.html { redirect_to @paper, notice: 'Paper was successfully created.' }
        format.json { render :show, status: :created, location: @paper }
      else
        format.html { render :new }
        format.json { render json: @paper.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @paper.update(paper_params)
        format.html { redirect_to @paper, notice: 'Paper was successfully updated.' }
        format.json { render :show, status: :ok, location: @paper }
      else
        format.html { render :edit }
        format.json { render json: @paper.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @paper.destroy
    respond_to do |format|
      format.html { redirect_to papers_url, notice: 'Paper was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def remove_all
    @research = Research.find(params[:research_id])
    @research.papers.delete_all
    @research.file_resources.each do |file|
      file.update_columns(imported: false)
    end
    redirect_to retrieve_papers_research_path(@research), notice: t('.success', default: 'All papers was successfully destroyed')
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_paper
      @paper = Paper.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def paper_params
      params.require(:paper).permit(:research_id, :title, :abstract, :keywords, :authors, :source, :publication_year, :type, :journal, :doi, :url)
    end
end
