50.times do
  Post.create(
    author: Faker::BackToTheFuture.character,
    comment: Faker::BackToTheFuture.quote,
    date: Faker::BackToTheFuture.date,
    avatar: Faker::Avatar.image("my-own-slug", "50x50", "bmp", "set1", "bg1"),
    likes: Faker::Number.between(1, 99)
  )
end

puts 'seeded, yo'