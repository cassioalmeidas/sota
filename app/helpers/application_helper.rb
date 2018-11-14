module ApplicationHelper

  def nav_bar
    content_tag(:ul, class: 'navbar-nav mr-auto') do 
      yield
    end
  end

  def nav_link(text, path)
    options = current_page?(path) ? { class: 'nav-item active' } : { class: 'nav-item' }
    text += content_tag(:span, '(current)', class: 'sr-only') if current_page?(path)
    content_tag(:li, options) do 
      link_to(path, { class: 'nav-link' }) do 
        text.html_safe
      end
    end
  end
end
