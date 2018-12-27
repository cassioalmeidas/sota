class ResearchesController < ApplicationController
  before_action :set_research, only: [:show, :edit, :update, :destroy, :planning, :retrieve_papers]
  # GET /researches
  # GET /researches.json

  add_breadcrumb proc { I18n.t('breadcrumbs.home', default: 'home') }, :root_path 
  add_breadcrumb proc { I18n.t('breadcrumbs.researches', default: 'researches') }, :researches_path

  def index
    @researches = Research.all
    params["columns"] ||= { "0" => {"data" => "" } }
    params["length"]  ||= -1
    respond_to do |format|
      format.html
      format.json { render json: ResearchDatatable.new(params, user: current_user) }
    end
  end

  # GET /researches/1
  # GET /researches/1.json
  def show
    add_breadcrumb proc { I18n.t('breadcrumbs.explore', default: 'explore') }, :research_path
  end

  # GET /researches/new
  def new
    @research = Research.new
  end

  # GET /researches/1/edit
  def edit
  end

  # POST /researches
  # POST /researches.json
  def create
    @research = Research.new(research_params)
    @research.user = current_user
    respond_to do |format|
      if @research.save
        format.html { redirect_to researches_url, notice: t('.success', default: 'Research was successfully created.') }
        format.json { render :show, status: :created, location: @research }
      else
        format.html { render :new }
        format.json { render json: @research.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /researches/1
  # PATCH/PUT /researches/1.json
  def update
    respond_to do |format|
      if @research.update(research_params)
        format.html { redirect_to researches_url, notice: t('.success', default: 'Research was successfully updated.') }
        format.json { render :show, status: :ok, location: @research }
      else
        format.html { render :edit }
        format.json { render json: @research.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /researches/1
  # DELETE /researches/1.json
  def destroy
    @research.destroy
    respond_to do |format|
      format.html { redirect_to researches_url, notice: t('.success', default: 'Research was successfully destroyed.') }
      format.json { head :no_content }
    end
  end

  def planning
    
  end

  def retrieve_papers
    add_breadcrumb proc { I18n.t('breadcrumbs.explore', default: 'explore') }, :research_path
    add_breadcrumb proc { I18n.t('breadcrumbs.retrieve_papers', default: 'retrieve papers') }, :retrieve_papers_research_path
    @file = @research.file_resources.new
    @files = @research.file_resources.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_research
      @research = Research.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def research_params
      params.require(:research).permit(:user_id, :description)
    end
end
