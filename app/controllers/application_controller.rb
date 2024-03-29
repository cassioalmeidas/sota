class ApplicationController < ActionController::Base
  before_action :set_locale
  before_action :authenticate_user!
  layout :layout_by_resource
  
  def default_url_options
    { locale: I18n.locale }
  end
  
  def set_locale
    I18n.locale = params[:locale] || extract_locale_from_accept_language_header
  end

  def layout_by_resource
    devise_controller? ? 'devise' : 'application'
  end

  private
    def extract_locale_from_accept_language_header
      accept_language = request.env['HTTP_ACCEPT_LANGUAGE'] || ""
      accept_language.match(/^[a-z]{2}(-[A-Z]{2})?/)[0]
    end
end
