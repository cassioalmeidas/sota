class AnnotationCategoriesController < ApplicationController
  before_action :set_research, only: [:index]

  def index
    @categories = @research.annotation_categories.order(:name).where("name like ?", "%#{params[:term]}%")
    render json: @categories.map(&:name)
  end

  private 

    def set_research
      @research = Research.find(params[:research_id])
    end
end