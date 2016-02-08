/* Cache.js | (c) 2015, 2016 LTG. v1.0 */
var Cache = {
	Stash: [],
	
	getImage: function(image) {
		for (var i = 0; i < this.Stash.length; i++) {
			if(this.Stash[i].src == location.href.substring(0,location.href.lastIndexOf('/')+1) + image || this.Stash[i].src == image) { return this.Stash[i]; console.log("[Cashe:Update] Get: ", image); };
		}
		console.log("[Cashe:Get] Image not found, addImage:", image);
		
		if(Cache.addImage(image)) {
			console.log("[Cashe:Get] Image Added, Get:", image);
			return Cache.getImage(image);
		} else {
			console.log("[Cashe:Get] Failed to Add:", image);
			return false;
		}
	},
	
	updateImage: function(image) {
		console.log("[Cashe:Update] Start: ", image);
		for (var i = 0; i < this.Stash.length; i++) {
			if(this.Stash[i].src == location.href.substring(0,location.href.lastIndexOf('/')+1) + image || this.Stash[i].src == image) {
				var tempImage = new Image();
				tempImage.src = image;
				if(tempImage) {
					this.Stash[i] = tempImage
					console.log("[Cashe:Update] Done:", image);
					return true;
				} else {
					console.log("[Cashe:Update] Failed to Add:", image);
					return false;
				}
			}
		}
	},
	
	addImage: function(image, force) {
		console.log("[Cashe:Added] Start: ", image);
		for (var i = 0; i < this.Stash.length; i++) {
			if(this.Stash[i].src == location.href.substring(0,location.href.lastIndexOf('/')+1) + image || this.Stash[i].src == image) {
				if(typeof force === "boolean") {
					if(force) {
						console.log("[Cashe:Added] Image found, Force updateImage:", image);
						return Cache.updateImage(image);
					}
				} else {
					console.log("[Cashe:Added] Image found, skipped:", image);
					return false;
				}
			}
		}
		
		var tempImage = new Image();
			tempImage.src = image;
		if(tempImage) { // Check for undefined
  			this.Stash.push(tempImage);
  			console.log("[Cashe:Added] Done:", image);
  			return true;
		} else {
			console.log("[Cashe:Added] Failed [Missing Image]:", image);
			return false;
		}
	},
}
