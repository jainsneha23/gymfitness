var model = (function() {

    var modelData = {
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
        tabModel: [{
            name: 'Activities',
            isActive: true,
            url: 'views/admin/activities.html',
            model: tempmodel.activities
        }, {
            name: 'Equipments',
            isActive: false,
            url: 'views/admin/equipments.html',
            model: tempmodel.equipments
        }, {
            name: 'Facilities',
            isActive: false,
            url: 'views/admin/facilities.html'
        }, {
            name: 'Packages',
            isActive: false,
            url: 'views/admin/packages.html'
        }]
    }
    return modelData;
})();