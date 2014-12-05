var model = (function() {

    var modelData = {
        activities: [{
            name: 'Yoga',
            description: 'Yoga is a physical, mental, and spiritual practice or discipline, that aims to transform body and mind. The term denotes a variety of schools, practices and goals in Hinduism, Buddhism and Jainism, the best-known being Hatha yoga and Raja yoga. The term yoga is derived from the literal meaning of "yoking together" a span of horses or oxen, but came to be applied to the "yoking" of mind and body'
        }, {
            name: 'Aerobics',
            description: 'Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness). It is usually performed to music and may be practiced in a group setting led by an instructor (fitness professional), although it can be done solo and without musical accompaniment. With the goal of preventing illness and promoting physical fitness, practitioners perform various routines comprising a number of different dance-like exercises. Formal aerobics classes are divided into different levels of intensity and complexity. Aerobics classes may allow participants to select their level of participation according to their fitness level. Many gyms offer a variety of aerobic classes. Each class is designed for a certain level of experience and taught by a certified instructor with a specialty area related to their particular class.'
        }, {
            name: 'Zumba',
            description: 'Zumba involves dance and aerobic elements. Zumba\'s choreography incorporates hip-hop, soca, samba, salsa, merengue and mambo. Squats and lunges are also included. Zumba Fitness, an organization that sells Zumba videos and products, does not charge licensing fees to gyms or fitness centers. Approximately 14 million people take weekly Zumba classes in over 140,000 locations across more than 185 countries.'
        }],
        equipments: [{
            name: 'Treadmill',
            category: 'Cardio',
            quantity: 15,
            description: 'Features stepper, jogger and twister. Features a wide walking surface. Comes with a 3 level manual incline and a push up bar'
        }, {
            name: 'Exercise Bikes',
            category: 'Cardio',
            quantity: 10,
            description: 'Fuel 4.0 Upright Bike has a sleek yet powerful ergonomic framework that mimics natural cycling motion by keeping your legs close. This is ideal as home gym equipment and provides you 24 manual fitness programs to make your training more professional. It comes with a 10 kg ( 22lbs) flywheel that ensures smooth and quite operation, a well-padded seat with extra cushion that could be adjusted upwards, downwards, back and front.  This is equipped with a dual colored LCD display with dot matrix profile which provides feedback on crucial workout data. Fuel 4.0 upright bike enables you to measure your heart rate with its hand pulse sensors and a wireless receiver with an optional chest strap. It also features adjustable handlebars and fully adjustable self-leveling pedals and straps. This bike incorporates 24 challenging programs that include 1 manual, 12 pre-set training programs, watts control, body fat, target heart rate, heart rate control- 55%, 65%, 75%, 85% and 4 user options. The console gives feedback on scan, speed, distance, time, calories, RPM, target heart rate, pulse, body fat, recovery, calendar, dock and indoor temperature, while the integrated sound system allows you to connect and iPod/ MP3 and listen to your favorite music while you’re working out on it.'
        }, {
            name: 'Home Gym',
            category: 'Muscle Strengthening',
            quantity: 5,
            description: 'Cosco CHG 150R Home Gym with Adjustable Seat (150 lbs) is all-in-one fitness equipment that enables the user to perform various exercises such as chest press, leg curl, lat pull down, front and back rowing, abdomen and arm musculature.  Cosco CHG 150R Home Gym with Adjustable Seat (150 lbs) features a 40 X 80 mm sturdy oval tubular frame with 150 lbs. plastic weight stacks. Ergonomically designed low pulley enable exercising on either side of the main frame.'
        }, {
            name: 'Flat Bench Press',
            category: 'Muscle strengthening',
            quantity: 7,
            description: 'Cosco CS 4 Flat Bench Press a convenient and comfortable support for those serious about benching. This top-grade structure is loaded with well-padded, high-density and contoured cushioned upholstery that sets high comfort levels. Its stable and durable yet comforting aspects cause less aches or harsh edges for a focused workout session.'
        }, {
            name: 'Adjustable Abdominal Bench',
            category: 'Muscle strengthening',
            quantity: 5,
            description: 'Cosco CS 16 Adjustable Abdominal Bench challenges users with less than ideal abdominals to one of the most dedicated workout buff. It is ergonomically designed to accommodate high intensity workout that strengthen the upper body and core muscles most effectively. Cushioned upholstery adds comfort and visual appeal as you sculpt your abs muscles for a six-pack definition outcome.'
        }, {
            name: 'Ab Coaster',
            category: 'Abdominal Exercises',
            quantity: 3,
            description: 'The AquaFit AQ119 AB Coaster is a heavy duty steel frame digital work out counter. The AquaFit AQ119 AB Coaster has a 300 lb work out counter with a weight capacity of 20 lb. Weight posts are for added resistance 3 position adjustable seat plus free style motion.'
        }, {
            name: 'Personal Gym Bench 9 in 1',
            category: 'All Specific Body Parts',
            quantity: 3,
            description: 'Made of heavy steel pipe and with powder coated paint Baspo Personal Gym Bench 9 in 1 can be utilised in doing arm presses, thigh exercises, leg curls and many more. The bench has a heavy duty frame which allows weighty built people also to exercise freely.'
        }],
        galleryImages: [{
            image: 'images/gallery1.jpg',
            description: 'Description'
        }, {
            image: 'images/gallery2.jpg',
            description: 'Description'
        }, {
            image: 'images/gallery3.jpg',
            description: 'Description'
        }, {
            image: 'images/gallery4.jpg',
            description: 'Description'
        }, {
            image: 'images/gallery5.jpg',
            description: 'Description'
        }, {
            image: 'images/gallery6.jpg',
            description: 'Description'
        }, {
            image: 'images/gallery7.jpg',
            description: 'Description'
        }, {
            image: 'images/gallery8.jpg',
            description: 'Description'
        }, {
            image: 'images/gallery9.jpg',
            description: 'Description'
        }],
        employeeModel: [{
            fname: "Sneha",
            lname: "Jain",
            contact: "1234567890",
            email: "sneha.jain@gmail.com",
            address: "munekollala",
            city: "bangalore",
            state: "karnataka",
            country: "india",
            pin: "560066",
            dob: "23-05-1990",
            gender: "f",
            doj: "01-12-2013",
            salary: "5000",
            lastpaid: "30-11-2014"
        }, {
            fname: "Sumit",
            lname: "Jain",
            contact: "9876543210",
            email: "sumit.jain@gmail.com",
            address: "marathalli",
            city: "cuttack",
            state: "orissa",
            country: "india",
            pin: "532066",
            dob: "13-05-1995",
            gender: "m",
            doj: "21-06-2013",
            salary: "7000",
            lastpaid: "31-10-2014"
        }],
        customerModel: [{
            fname: "Sundar",
            lname: "Laal",
            contact: "1234567890",
            email: "sneha.jain@gmail.com",
            address: "munekollala",
            city: "bangalore",
            state: "karnataka",
            country: "india",
            pin: "560066",
            dob: "23-05-1990",
            gender: "f",
            doj: "01-12-2013",
            packages: "3",
            lastpayment: "30-11-2014"
        }]
    }
    return modelData;
})();