Rails.application.routes.draw do

  scope '(:locale)', locale: /#{I18n.available_locales.join('|')}/ do
    root to: 'welcome#index'
    get 'datatable_i18n', to: 'datatables#datatable_i18n'
    resources :papers
    resources :researches
    devise_for :users
  end

  get '*path', to: redirect("/#{I18n.default_locale}/%{path}/"), constraints: lambda { |req| !req.path.starts_with? "/#{I18n.default_locale}/" }
  get '', to: redirect("/#{I18n.default_locale}/")
end
