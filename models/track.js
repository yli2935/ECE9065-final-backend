const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tractSchema = new Schema({
  track_id: {
    type: String,
    
  },
  album_id: {
    type: String,
    
  },
  album_title: {
    type: String,
    
  },
  album_url: {
    type: String,
    
  },
  artist_id: {
    type: String,
    
  },
  artist_name: {
    type: String,
    
  },
  artist_url: {
    type: String,
    
  },
  artist_website: {
    type: String,
    
  },
  license_image_file: {
    type: String,
    
  },
  license_image_file_large: {
    type: String,
    
  },
  license_parent_id: {
    type: String,
    
  },
  license_title: {
    type: String,
    
  },
  license_url: {
    type: String,
    
  },
  tags: {
    type: String,
    
  },
  track_bit_rate: {
    type: String,
    
  },
  track_comments: {
    type: String,
    
  },
  track_composer: {
    type: String,
    
  },
  track_copyright_c: {
    type: String,
    
  },
  track_copyright_p: {
    type: String,
    
  },

  track_date_created: {
    type: String,
    
  },
  track_date_recorded: {
    type: String,
    
  },
  track_disc_String: {
    type: String,
    
  },
  track_duration: {
    type: String,
    
  },
  track_explicit: {
    type: String,
    
  },
  track_explicit_notes: {
    type: String,
    
  },
  track_favorites: {
    type: String,
    
  },

  track_file: {
    type: String,
    
  },
  track_genres: {
    type: String,
    
  },

  track_image_file: {
    type: String,
    
  },

  track_information: {
    type: String,
    
  },
  track_instrumental: {
    type: String,
    
  },

  track_interest: {
    type: String,
    
  },

  track_language_code: {
    type: String,
    
  },
  track_listens: {
    type: String,
    
  },

  track_lyricist: {
    type: String,
    
  },
  track_String: {
    type: String,
    
  },

  track_publisher: {
    type: String,
    
  },

  track_title: {
    type: String,
    
  },
  track_url: {
    type: String,
    
  },
  visibility:{
    type:Boolean,
    default:true
  }

});

module.exports = mongoose.model("Tract", tractSchema);
