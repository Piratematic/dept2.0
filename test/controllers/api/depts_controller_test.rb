require 'test_helper'

class Api::DeptsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_depts_index_url
    assert_response :success
  end

  test "should get show" do
    get api_depts_show_url
    assert_response :success
  end

  test "should get create" do
    get api_depts_create_url
    assert_response :success
  end

  test "should get update" do
    get api_depts_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_depts_destroy_url
    assert_response :success
  end

end
