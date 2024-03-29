class ResearchDatatable < AjaxDatatablesRails::ActiveRecord

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      # id: { source: "User.id", cond: :eq },
      # name: { source: "User.name", cond: :like }
      description: { source: 'Research.description', cond: :like, searchable: true, orderable: true },
      created_at:  { source: 'Research.created_at', cond: :like, orderable: true },
      dt_actions:  { source: 'dt_actions', orderable: false, searchable: false }
    }
  end

  def data
    records.map do |record|
      {
        # example:
        # id: record.id,
        # name: record.name
        description: record.description,
        created_at: I18n.l(record.created_at, format: :short),
        dt_actions: record.decorate.dt_actions
      }
    end
  end

  def user
    @user ||= options[:user]
  end

  def get_raw_records
    # insert query here
    user.researches.order('created_at DESC')
  end

end
