# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

puts "Creating users..."
User.create(username: "Roger", password: "password")
User.create(username: "Martha", password: "12345")

puts "Creating drinks..."
Drink.create(name:"Big Gulp" , ingredients:"8 shots of vodka, 1 olive" , instructions: "Mix all the shots in a stein and add the olive. Drink all at once." , img_url:"https://image.shutterstock.com/image-photo/young-happy-business-man-holding-260nw-716612023.jpg", custom: true)
Drink.create(name:"Wednesday Night" , ingredients:"Whatever you have left in your liquor cabinet" , instructions: "Wallow in sadness." , img_url:"https://thumbs.dreamstime.com/z/sad-man-drinking-wine-bar-sad-man-complaining-drinking-wine-alone-bar-night-104233894.jpg", custom: true)
Drink.create(name:"White claw" , ingredients:"just one white claw" , instructions: "Go and buy a white claw." , img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2g3lXlXFylkeHK0T-HtAugkP1MPaY_YBsZpv-DqwS03InnrGssSyxzIE1uMlgo8dctBI&usqp=CAU", custom: true)
Drink.create(name:"Water" , ingredients:"water" , instructions: "Have some water." , img_url:"https://c8.alamy.com/comp/2C947N9/drink-plenty-of-water-drinking-water-in-forest-outdoor-with-sunset-nature-on-background-bearded-man-with-water-bottle-fitness-portrait-of-bearded-man-happy-mature-guy-thirsty-hipster-traveler-2C947N9.jpg", custom: true)

puts "Creating userdrinks..."
UserDrink.create(drink_id: 1, user_id: 2)
UserDrink.create(drink_id: 3, user_id: 2)
UserDrink.create(drink_id: 2, user_id: 1)
UserDrink.create(drink_id: 4, user_id: 1)

puts "done seeding!..."