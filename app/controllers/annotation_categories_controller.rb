class AnnotationCategoriesController < ApplicationController
  def index
    @categories = AnnotationCategory.order(:name).where("name like ?", "%#{params[:term]}%")
    render json: @categories.map(&:name)
  end
end