class Classification {
  constructor({ name, gender, probability, count }) {
    this.name = name;
    this.gender = gender;
    this.probability = probability;
    this.sample_size = count;
    this.is_confident = probability >= 0.7 && count >= 100;
    this.processed_at = new Date().toISOString();
  }
}

module.exports = Classification;