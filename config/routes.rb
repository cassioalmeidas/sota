Rails.application.routes.draw do

  scope '(:locale)', locale: /#{I18n.available_locales.join('|')}/ do
    root to: 'welcome#index'
    get 'datatable_i18n', to: 'datatables#datatable_i18n'
    devise_for :users
    
    resources :researches do 
      member do 
        get 'planning'
        get 'retrieve_papers'
      end
      resources :file_resources do 
        member do 
          get 'import'
        end
      end
      resources :papers do 
        collection do 
          delete 'remove_all'
        end
      end

    end
  end

  get '*path', to: redirect("/#{I18n.default_locale}/%{path}/"), constraints: lambda { |req| !req.path.starts_with? "/#{I18n.default_locale}/" }
  get '', to: redirect("/#{I18n.default_locale}/")
end
