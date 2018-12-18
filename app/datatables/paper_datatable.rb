class PaperDatatable < AjaxDatatablesRails::ActiveRecord

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      # id: { source: "User.id", cond: :eq },
      # name: { source: "User.name", cond: :like }
      id: { source: 'Paper.id', cond: :eq, searchable: false, orderable: true },
      title: { source: 'Paper.title', cond: :like, searchable: true, orderable: false }
    }
  end

  def data
    records.map do |record|
      {
        id: record.id,
        title: record.decorate.link_to(research)
      }
    end
  end

  def research
    @research ||= Research.find(options[:research_id])
  end

  def get_raw_records
    research.papers.all
  end

end
