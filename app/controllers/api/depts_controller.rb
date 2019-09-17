class Api::DeptsController < ApplicationController
  before_action :set_dept, only: [:show, :update, :destroy]
  
  def index
    render json: Dept.all
  end

  def show
    render json: @dept
  end

  def create
    dept = Dept.new(dept_params)

    if dept.save
      render json: dept
    else 
      render json: product.errors, status: 422
    end
  end

  def update
    if @ dept.update(dept_params)
      render json: @dept
    else
      render json: @dept.errors, status: 422
    end
  end

  def destroy
    @dept.destroy
  end

  private
    def set_dept
      @dept = Dept.find(parmas[:id])
    end

    def dept_params
      params.require(:dept).permit(:name)
    end
end
