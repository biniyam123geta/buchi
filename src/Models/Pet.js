

export class Pet{

    constructor(type,gender,size,photos,good_with_children) {
      this.type = type;
      this.gender = gender;
      this.size = size;
      this.good_with_children = good_with_children;
      this.photos=photos
    }


    getType(){
return this.type;
    }
    getGender(){
return this.gender;
    }
  }