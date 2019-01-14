const PLANET_YEAR_RATIO = {
  // 31557600 seconds
  // 365.25 days
  earth: 1,
  // relative to Earth:
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
  // no Pluto's here, because of this:
  // https://www.youtube.com/watch?v=Z_2gbGXzFbs
};

export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  get yearsOnEarth() {
    return this.seconds / 60 / 60 / 24 / 365.25;
  }

  calculatePlanetYears(planetName) {
    return +((this.yearsOnEarth / PLANET_YEAR_RATIO[planetName]).toFixed(2));
  }

  onMercury() {
    return this.calculatePlanetYears('mercury');
  }

  onVenus() {
    return this.calculatePlanetYears('venus');
  }

  onEarth() {
    return this.calculatePlanetYears('earth');
  }

  onMars() {
    return this.calculatePlanetYears('mars');
  }

  onJupiter() {
    return this.calculatePlanetYears('jupiter');
  }

  onSaturn() {
    return this.calculatePlanetYears('saturn');
  }

  onNeptune() {
    return this.calculatePlanetYears('neptune');
  }

  onUranus() {
    return this.calculatePlanetYears('uranus');
  }
}
