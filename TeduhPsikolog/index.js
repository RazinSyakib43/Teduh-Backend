const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://teduh:admin@teduh-psikolog.roaqd2p.mongodb.net/TeduhPsikologDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const psikologs = mongoose.model("Psikolog", {
  name: String,
});

const reviews = mongoose.model("Review", {
  psikolog_id: mongoose.Schema.Types.ObjectId,
  rating: Number,
  message: String,
});

reviews
  .find({})
  .populate("psikolog_id", "name")
  .then(async (Review) => {

    const result = {
      data: [],
    };

    for (const review of Review) {
      const psikolog = await psikologs.findById(review.psikolog_id);

      result.data.push({
        _id: psikolog._id,
        name: psikolog.name,
        reviews: [
          {
            _id: review._id,
            psikolog_id: review.psikolog_id,
            rating: review.rating,
            message: review.message,
          },
        ],
      });
    }

    for (const psikologData of result.data) {
      let totalRating = 0;

      for (const review of psikologData.reviews) {
        totalRating += review.rating;
      }

      const averageRating = totalRating / psikologData.reviews.length || 0;
      psikologData.average_rating = averageRating;
    }

    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    mongoose.connection.close();
  });
