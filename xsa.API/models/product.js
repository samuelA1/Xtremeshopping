const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const algolia = require('mongoose-algolia');

const ProductSchema = new Schema({
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    image: String,
    title: String,
    description: String,
    price: Number,
    created: {type: Date, default: Date.now}
}, {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});

ProductSchema
    .virtual('averageRating')
    .get(function() {
        var rating = 0;
        if (this.reviews.length == 0) {
            this.rating = 0;
        }else {
            this.reviews.map((review) => {
                rating += review.rating
            });
            rating = rating / this.reviews.length
        }
        return rating;
    })

ProductSchema.plugin(algolia, {
    appId: '45PFEO9EZL',
    apiKey: '8557f62f77a0d0d6e90e6ee2a9be8822',
    indexName: 'xtreme',
    selector: '_id title image reviews description price owner created averageRating',
    populate: {
      path: 'owner reviews',
      select: 'name rating'
    },
    defaults: {
      author: 'uknown'
    },
    mappings: {
      title: function(value) {
        return `${value}`
      }
    },
    virtuals: {
      averageRating: function(doc) {
        var rating = 0;
      if (doc.reviews.length == 0) {
        rating = 0;
      } else {
        doc.reviews.map((review) => {
          rating += review.rating;
        });
        rating = rating / doc.reviews.length;
      }
  
      return rating;
      }
    },
    debug: true
  })

ProductSchema.plugin(deepPopulate);
ProductSchema.plugin(algolia);

let Model =  mongoose.model('Product', ProductSchema);
Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
  searchableAttributes: ['title']
});
module.exports = Model