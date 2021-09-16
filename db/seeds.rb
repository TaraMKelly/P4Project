# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

puts "Creating users..."
User.create(username: "Roger", password: "password")
User.create(username: "Martha", password: "12345")

puts "Creating drinks..."
Drink.create(name:"Big Gulp" , ingredients:"8 shots of vodka, 1 olive" , instructions: "Mix all the shots in a stein and add the olive. Drink all at once." , img_url:"https://image.shutterstock.com/image-photo/young-happy-business-man-holding-260nw-716612023.jpg", custom: true)
Drink.create(name:"Wednesday Night" , ingredients:"Whatever you have left in your liquor cabinet" , instructions: "Wallow in sadness." , img_url:"https://thumbs.dreamstime.com/z/sad-man-drinking-wine-bar-sad-man-complaining-drinking-wine-alone-bar-night-104233894.jpg", custom: true)
Drink.create(name:"White claw" , ingredients:"just one white claw" , instructions: "Go and buy a white claw." , img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2g3lXlXFylkeHK0T-HtAugkP1MPaY_YBsZpv-DqwS03InnrGssSyxzIE1uMlgo8dctBI&usqp=CAU", custom: true)
Drink.create(name:"Water" , ingredients:"water" , instructions: "Hydrate." , img_url:"https://c8.alamy.com/comp/2C947N9/drink-plenty-of-water-drinking-water-in-forest-outdoor-with-sunset-nature-on-background-bearded-man-with-water-bottle-fitness-portrait-of-bearded-man-happy-mature-guy-thirsty-hipster-traveler-2C947N9.jpg", custom: true)
Drink.create(name:"Mojito" , ingredients:"1 1/2 oz White rum, 1 oz Fresh lime juice, 2 teaspoons Sugar, 6 leaves of Mint, Soda Water" , instructions: "Mint sprigs muddled with sugar and lime juice. Rum added and topped with soda water. Garnish with sprig of mint leaves. " , img_url:"https://cdn.diffords.com/contrib/stock-images/2016/1/01/20163e856fbeb76b298eb064a15897d2b5d6.jpg", custom: true)
Drink.create(name:"Old Fashioned" , ingredients:"1 1/2 oz Bourbon, 1 Sugar cube, 2 dashes Angostura bitters, Few dashes plain water", instructions: "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange slice and a cocktail cherry." , img_url:"https://imbibemagazine.com/wp-content/uploads/2019/07/im-old-fashioned-jungle-bird-bar-crdt-eric-medsker.jpg", custom: true)
Drink.create(name:"Mezcal Margarita" , ingredients:"1 ½ ounces mezcal, 1 ounce orange liqueur, ¾ ounce freshly-squeezed lime juice, simple syrup, ice" , instructions: "Add mezcal, lime juice and Cointreau to a cocktail shaker, and shake or stir until combined." , img_url:"https://www.gimmesomeoven.com/wp-content/uploads/2015/12/Mezcal-Margaritas-3.jpg", custom: true)
Drink.create(name:"Gin and Tonic" , ingredients:"1 to 3 parts gin, 3 parts tonic water, 1 lime wedge." , instructions: "Pour the gin & top with tonic. Add the lime.", img_url: "https://www.thespruceeats.com/thmb/4onn0t5VPnaG4om6z7FOZsIIqtw=/1000x668/filters:fill(auto,1)/gin-tonic-5a8f334b8e1b6e0036a9631d.jpg", custom: true)


puts "Creating userdrinks..."
UserDrink.create(drink_id: 1, user_id: 2)
UserDrink.create(drink_id: 3, user_id: 2)
UserDrink.create(drink_id: 3, user_id: 1)
UserDrink.create(drink_id: 4, user_id: 1)
UserDrink.create(drink_id: 5, user_id: 2)
UserDrink.create(drink_id: 6, user_id: 2)
UserDrink.create(drink_id: 7, user_id: 1)
UserDrink.create(drink_id: 8, user_id: 1)

puts "done seeding!..."