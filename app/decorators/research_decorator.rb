class ResearchDecorator < ApplicationDecorator
  delegate_all

  # Define presentation-specific methods here. Helpers are accessed through
  # `helpers` (aka `h`). You can override attributes, for example:
  #
  #   def created_at
  #     helpers.content_tag :span, class: 'time' do
  #       object.created_at.strftime("%a %m/%d/%y")
  #     end
  #   end


  # Just an example of a complex method you can add to you decorator
  # To render it in a datatable just add a column 'dt_actions' in
  # 'view_columns' and 'data' methods and call record.decorate.dt_actions
  def dt_actions
    links = []
    links << h.link_to(h.research_path(object), class: 'btn btn-success') do 
      h.fa_icon 'rocket', text: h.t('buttons.explore', default: 'Explore')
    end
    links << h.link_to(h.edit_research_path(object), class: 'btn btn-primary') do 
      h.fa_icon 'edit', text: h.t('buttons.edit', default: 'Edit')
    end
    links << h.link_to(h.research_path(object), method: :delete, remote: true, class: 'btn btn-danger', data: {title: 'Confirmation', confirm: 'Are you sure?'}) do 
      h.fa_icon 'remove', text: h.t('buttons.remove', default: 'Remove')
    end
    h.safe_join(links, '')
  end  
end
