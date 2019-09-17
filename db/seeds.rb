5.times do
  Dept.create(
    dept: Faker::Commerce.department
  )
end

puts "5 depts Seeded"
