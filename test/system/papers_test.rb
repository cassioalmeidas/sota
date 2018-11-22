require "application_system_test_case"

class PapersTest < ApplicationSystemTestCase
  setup do
    @paper = papers(:one)
  end

  test "visiting the index" do
    visit papers_url
    assert_selector "h1", text: "Papers"
  end

  test "creating a Paper" do
    visit papers_url
    click_on "New Paper"

    fill_in "Abstract", with: @paper.abstract
    fill_in "Authors", with: @paper.authors
    fill_in "Doi", with: @paper.doi
    fill_in "Journal", with: @paper.journal
    fill_in "Keywords", with: @paper.keywords
    fill_in "Publication Year", with: @paper.publication_year
    fill_in "Research", with: @paper.research_id
    fill_in "Source", with: @paper.source
    fill_in "Title", with: @paper.title
    fill_in "Type", with: @paper.type
    fill_in "Url", with: @paper.url
    click_on "Create Paper"

    assert_text "Paper was successfully created"
    click_on "Back"
  end

  test "updating a Paper" do
    visit papers_url
    click_on "Edit", match: :first

    fill_in "Abstract", with: @paper.abstract
    fill_in "Authors", with: @paper.authors
    fill_in "Doi", with: @paper.doi
    fill_in "Journal", with: @paper.journal
    fill_in "Keywords", with: @paper.keywords
    fill_in "Publication Year", with: @paper.publication_year
    fill_in "Research", with: @paper.research_id
    fill_in "Source", with: @paper.source
    fill_in "Title", with: @paper.title
    fill_in "Type", with: @paper.type
    fill_in "Url", with: @paper.url
    click_on "Update Paper"

    assert_text "Paper was successfully updated"
    click_on "Back"
  end

  test "destroying a Paper" do
    visit papers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Paper was successfully destroyed"
  end
end
