class AnnotationCategoriesController < ApplicationController
  before_action :set_research, only: [:index, :sort]

  def index
    @categories = @research.annotation_categories.order(:name).where("name like ?", "%#{params[:term]}%").distinct
    render json: @categories.map(&:name)
  end

  def sort
    params[:annotation_category].each_with_index do |id, index| 
      @research.annotation_categories.where(id: id).update_all(position: index+1)
    end
    head :ok
  end
  
  private 
    def set_research
      @research = Research.find(params[:research_id])
    end
end