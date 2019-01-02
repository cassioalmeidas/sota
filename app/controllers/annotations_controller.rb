class AnnotationsController < ApplicationController
  before_action :set_annotation, only: [:edit, :update, :destroy]
  before_action :set_research, only: [:create]
  before_action :set_paper, only: [:create]

  def edit
    respond_to do |format|
      format.js
    end
  end
  
  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.paper = @paper
    respond_to do |format|
      if @annotation.save 
        format.html { redirect_to annotate_papers_research_path(@research), notice: t('.success', default: 'Annotation was successfully created.') }
      else
        format.html { redirect_to annotate_papers_research_path(@research) }
        format.json { render json: @annotation.errors, status: :unprocessable_entity }
      end
    end
  end


  def update
    respond_to do |format|
      if @annotation.update(annotation_params)
        format.js
      else
        format.js { render :edit }
        format.json { render json: @annotation.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    research = @annotation.paper.research
    @annotation.destroy
    respond_to do |format|
      format.html { redirect_to annotate_papers_research_path(research), notice: t('.success', default: 'Annotation was successfully removed') }
    end
  end
  

  private 

    def set_annotation
      @annotation = Annotation.find(params[:id])
    end

    def set_research
      @research = Research.find(params[:research_id])
    end

    def set_paper
      @paper = Paper.find(params[:paper_id])
    end 

    def annotation_params
      params.require(:annotation).permit(:id, :body, :category_name)
    end
end