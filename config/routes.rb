Rails.application.routes.draw do

  scope '(:locale)', locale: /#{I18n.available_locales.join('|')}/ do
    root to: 'welcome#index'
    get 'datatable_i18n', to: 'datatables#datatable_i18n'
    devise_for :users
    
    resources :researches do 
      member do 
        get 'planning'
        get 'retrieve_papers'
        get 'annotate_papers'  
        get 'annotations_reports'     
      end
      resources :file_resources do 
        member do 
          get 'import'
        end
      end
      resources :papers do 
        resources :annotations, shallow: true do

        end
        member do 
          get :translate
        end
        collection do 
          delete 'remove_all'
        end
        resources :annotation_categories, shallow: true do 
        end
        
      end
      resources :annotation_categories, shallow:true,  only: [:sort] do 
        collection { post :sort }
      end
    end

    if Rails.env.production?
      mount Shrine.presign_endpoint(:cache) => "/s3/params"
    else
      # In development and test environment we're using filesystem storage
      # for speed, so on the client side we'll upload files to our app.
      mount Shrine.upload_endpoint(:cache) => "/upload"
    end    
  end

  get '*path', to: redirect("/#{I18n.default_locale}/%{path}/"), constraints: lambda { |req| !req.path.starts_with? "/#{I18n.default_locale}/" }
  get '', to: redirect("/#{I18n.default_locale}/")
end
