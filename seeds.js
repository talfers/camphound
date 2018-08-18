var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
        {
            name: "Pine Cove",
            image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5cedc6b95f731395da7269d2341f9a5e&auto=format&fit=crop&w=1350&q=80",
            description: "Surrounded by a dense forest valley highlighted by aspens and wildflowers, this campsite is high country. The North Fork of the South Platte River is a hop, skip and walk away. Gibson Lake Trail, a 1,544 foot climb, is good exercise and worth the effort."
        },
        {
            name: "Blue River",
            image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=45fc8a446ad11a120c543c426382119f&auto=format&fit=crop&w=1350&q=80",
            description: "The fishing community flocks to Little Molas for the rainbow and brook trout. You can get your rock climb on or take in the waterfall in Cascade Canyon. But get ready to do some real camping as hail, snow and sudden rain are common."
        },
        {
            name: "Devil's Backbone",
            image: "https://images.unsplash.com/photo-1517807289433-f0282e362596?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a93e785ae9dbb13f0b20f0c8ecfb294a&auto=format&fit=crop&w=1307&q=80",
            description: "Southwest of Yampa, Cold Springs’s far off the beaten path, even for car camping. It’s going to be one of most private public areas to find along FR 900. You can’t reserve a spot, so get there early. Enjoy the wilderness, jump in the springs or visit the nearby mountain town for a nice dinner."
        },        
        {
            name: "Rainbow Valley",
            image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-0.3.5&s=2e80ca86a30db7be648da0d9b9e21fae&auto=format&fit=crop&w=1350&q=80",
            description: "Out near Montrose, North Rim is unbelievable. There’s epic scenery, especially along the rim with its piñon-juniper forest. Campsites are comfy and small, so don’t bring the RV or trailer. Do be ready to look down the 2,000 foot deep canyon, fly fish and take photos that will pale compared to real-world views."
        },
        {
            name: "Green Mountain",
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0b66b816b4653b3b0e02af008c82403&auto=format&fit=crop&w=1350&q=80",
            description: "It’s right there in the name: paradise. Campers love this place more for relaxation than anything. During the summer, hit the waters in a sea kayak, canoe or paddle boat, or just take in the groves, wildflowers and really, really, really big mountains."
        },
        {
            name: "Peak One",
            image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffdbb5e90a2c129258d4540ef0f29d06&auto=format&fit=crop&w=1350&q=80",
            description: "Rafting, boating, swimming and fishing abound. Every family site comes equipped with a campfire ring and picnic table. It’s elevated at 8,600 feet and banked on the Taylor River. Get a shaded site under a row of aspen trees."
        },
        {
            name: "Roger's Gorge",
            image: "https://images.unsplash.com/photo-1444124818704-4d89a495bbae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a128b113cb6090ba5d87ee29fc3a7869&auto=format&fit=crop&w=1350&q=80",
            description: "Near the Mount Zirkel Mountains, Big Creek boasts inspiring summits. The peaceful blue lakes will make you wonder why you’d ever go home. We never get tired of the two mile trail along Seven Lakes and the opportunity to run into a moose."
        },        
        {
            name: "Muddy Flats",
            image: "https://images.unsplash.com/photo-1519095614420-850b5671ac7f?ixlib=rb-0.3.5&s=77f8eee4e678167ffca8833649e5644d&auto=format&fit=crop&w=1350&q=80",
            description: "Crested Butte sits at the end of a hanging valley. Oh Be Joyful is set in the trees along a dirt road. Alpine meadows stream up serrated peaks everywhere you look. Fish on Slate River, take a dip in pools off the mountain and find time for a little kayaking."
        },
        {
            name: "Little Sahara",
            image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&s=73115e54fa3d099fcb2d92ccf12eee41&auto=format&fit=crop&w=1353&q=80",
            description: "We like Moraine Park for the occasional mule deer, elk or coyote. It’s not unusual for these creatures to wander harmlessly near the campground. And the family’s going to embrace the lily pad-covered pond off Cub Lake."
        },
        {
            name: "Red Cliff",
            image: "https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f0bb0006c15a626dab0a5025e7838fa&auto=format&fit=crop&w=1350&q=80",
            description: "If your trip’s about family adventure, Vallecito is what you want. Get some fishing done in the quieter parts of the early fall because the warmer months belong to water skiing. After the boating and water sports, trek the Weminuche Wilderness’s scenic and quiet overlooks."
        },        
        {
            name: "Big Dunes",
            image: "https://images.unsplash.com/photo-1473713984581-b8918cc3652e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d0b711da885120b59a94bce6d3163d35&auto=format&fit=crop&w=1350&q=80",
            description: "The masses have discovered this secret treasure, a canyon country outside Grand Junction. Once upon a day, you could be out there for days and not see a soul. Now campers know of the forests, rock sculptures and trails. It’s still worth the trip. We’ve enjoyed nice long hikes on Monument Canyon and Ottos, and we absolutely love the wide canyon vistas."
        },
        {
            name: "Ocean Walk",
            image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&s=adf3225f314db1ac216ea22b6e58e925&auto=format&fit=crop&w=1350&q=80",
            description: "Marvel at the forest of fir and spruce bordering the Sangre de Cristo Mountains. There’s the granite domes and the open meadow to Bear Lake. Set in the southeastern national forest land, there’s an alpine meadow. Throw a line in almost any direction and catch some great trout."
        },
        {
            name: "Dunton Hot Springs",
            image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=1350&q=80",
            description: "If you want to meet new people, set up at Red Feather Lakes or Poudre Canyon. If you seek a little privacy, head to Long Draw. Long Draw promises wilderness and solitude. The area has RV camping. Expect to be surrounded by woods that shade and minimizes the heat. If you hike, Corral Creek will become your spot."
        },
        {
            name: "Turquoise Lake Recreation Area",
            image: "https://images.unsplash.com/photo-1455122990967-5f5b1030f719?ixlib=rb-0.3.5&s=84222f7afd2da392d280fbaef7ef923f&auto=format&fit=crop&w=1350&q=80",
            description: "Hiking, fishing, outfitter and private rafting, wildlife, mountain biking and trails, and picnic tables await amid this first-come, first-served campground. Enjoy a variety of vegetation along the riparian zone of the river in an open conifer forest. The river flows throughout the campground and there’s outstanding stream fishing."
        },
        {
            name: "Granite Tent",
            image: "https://images.unsplash.com/photo-1464547323744-4edd0cd0c746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2f853d71f43de92c4d568531aa5608f&auto=format&fit=crop&w=1350&q=80",
            description: "Located above the Rampart Reservoir, Thunder Ridge is popular for fishing, boating and hiking. Pikes Peak is one of the country’s highest, reaching over 14,000 feet. It’s quaint, quiet and a great place to sit around the campfire and get to know your family better. You can even bring the family pet."
        },        
        {
            name: "Thunder Ridge",
            image: "https://images.unsplash.com/photo-1484172340747-54a828bfeb6e?ixlib=rb-0.3.5&s=f6bca11338a7bbe6f81e6520e45a6068&auto=format&fit=crop&w=925&q=80",
            description: "Kelly Dahl is a small campground and makes for a great weekend getaway. The majority of outdoor activities require almost no travel as they’re waiting right outside your tent. You can head over to Nederland for some cultural events or the skate park."
        },
        {
            name: "Bear Lake",
            image: "https://images.unsplash.com/photo-1460458248189-2cb101df4e67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjE2NzE0fQ&s=7866a55acd84bda18113294631812d5d&auto=format&fit=crop&w=1420&q=80",
            description: "Within a stone’s throw of Jefferson Creek, Aspen has one of the state’s highest elevated lakes, bordered by peaks up to 12,000 feet high. The campground’s surrounded by groves of aspen and spruce, offering a relaxing shade. As getting there in the winter can be rough, this site is seasonal."
        },
        {
            name: "Vallecito Reservoir",
            image: "https://images.unsplash.com/photo-1478296025124-90b11a7a36ee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90765158fa4bc1badc353ee3b97c9fe9&auto=format&fit=crop&w=1350&q=80",
            description: "A great place for car camping, we hear the river is a soothing lullaby and mornings can be a joy listening to the lunkers swim and leap. It’s said many of the lunkers migrate from nearby Harmel Ranch’s private stretch of the river."
        },        
        {
            name: "Moraine Park",
            image: "https://images.unsplash.com/photo-1499363145340-41a1b6ed3630?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3761b04cf7c21b831647fbef86ad438&auto=format&fit=crop&w=1350&q=80",
            description: "The Turquoise is a great place for privacy. With a total of eight campgrounds, you’ll be surrounded by a thick evergreen forest, an 1,800 acre lake and Colorado’s spectacular mountains. The 12 mile bike trail starts in Leadville and loops Mineral Belt. It’s an easy trek the whole family will enjoy."
        },
        {
            name: "Oh Be Joyful",
            image: "https://images.unsplash.com/photo-1471474382320-7d31e2cc170e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32d5b23811689d50842bb7e0c867dfa9&auto=format&fit=crop&w=1267&q=80",
            description: "Sitting in the valley at the tail of the mountain range, Dunton is more of a resort with a relaxing camping/tenting atmosphere. A renovated old west town with full modern amenities, the meadowed property has a saloon, dancehall, hot-spring bath house and a private stretch on the Dolores River."
        },
        {
            name: "Big Creek Lakes",
            image: "https://images.unsplash.com/photo-1479741044197-d28c298f8c77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00a8cfc7aba62bd47f10abd96551cb1d&auto=format&fit=crop&w=1350&q=80",
            description: "There’s black bear, deer, elk, fox, coyotes, big horn sheep and tons of birds. You’ve got stunning views of the Continental Divide on the west and Pikes Peak on the east. Four Mile Creek has trout. Hike up Dome Rock or join a ranger-led nature walk."
        },
        {
            name: "Rosy Lane Campground",
            image: "https://images.unsplash.com/photo-1465865523598-a834aac5d3fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c5ad1730ca0862e11d1df3157d99a8f&auto=format&fit=crop&w=1350&q=80",
            description: "You’re going to love the pioneering spirit that Guanella Pass encourages. Take in reenactments of wagon days or explore old wagon trails and ghost towns. Collect your own campfire wood in the spruce forest, hike burly trails or spend a day trout fishing."
        },        
        {
            name: "Elk Run and Fisherman’s Paradise",
            image: "https://images.unsplash.com/photo-1490733325962-96398c69612a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f8db8749b54d68890beccedd7772186&auto=format&fit=crop&w=1350&q=80",
            description: "Adjacent to Middle St. Vrain Creek, the pet-friendly Camp Dick offers dogs plenty of places to run. The sound of surrounding water is relaxing and the water’s a great place to take a dip on warm days. There’s fishing, horseback riding, biking and just enjoying nature."
        },
        {
            name: "North Rim",
            image: "https://images.unsplash.com/photo-1494112142672-801c71472ba5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=48497b3aaecaf016f789017c757aa4d6&auto=format&fit=crop&w=1350&q=80",
            description: "Let everyone else head over to the Rocky Mountains. Southeast of Gould, the Crags is one of the state’s best spots for car camping. There’s climbing at Nokhu, hiking and cast flying at American Lakes. The access roads can be pretty rough, so make sure your vehicle’s up to the task."
        }
    ];

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Removed all campgrounds!");
            //Add a few campground INSIDE CALLBACK FOR SURETY
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("Added a new campground!");
                        //Add a few comments to campgrounds
                        Comment.create({
                            text: "This place is great, but I wish it had internet.",
                            author: "Jackie"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created a new comment!");
                            }
                        });
                    }
                });
            });
        }
    });
    //Add a few campgrounds
    //Add a few comments to campgrounds
}

module.exports = seedDB;