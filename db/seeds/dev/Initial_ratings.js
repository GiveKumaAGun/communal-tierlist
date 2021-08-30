
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sandwich').del()
    .then(function () {
      // Inserts seed entries
      return knex('sandwich').insert([
        {
          BaconEggCheese: 10,
          GrilledCheese: 10,
          PulledPork: 10,
          BLT: 10,
          TunaMelt: 10,
          FriedChicken: 10,
          Cheesesteak: 10,
          Cubano: 10,
          MeatballSub: 10,
          Reuben: 10,
          Caprese: 10,
          PattyMelt: 10,
          PBJ: 10,
          RoastBeef: 10,
          Tonkatsu: 10,
          HamCheese: 10,
          Bologna: 10,
        }
      ]);
    });
};


// {
//   BaconEggCheese: ,
//   GrilledCheese: ,
//   PulledPork: ,
//   BanhMi: ,
//   BLT: ,
//   ItalianSub: ,
//   Thanksgiving: ,
//   LobsterRoll: ,
//   TurkeyClub: ,
//   TunaMelt: ,
//   FriedChicken: ,
//   Cheesesteak: ,
//   Cubano: ,
//   MeatballSub: ,
//   Reuben: ,
//   Gyro: ,
//   PoBoy: ,
//   Caprese: ,
//   PattyMelt: ,
//   EggSalad: ,
//   FrenchDip: ,
//   PBJ: ,
//   Torta: ,
//   RoastBeef: ,
//   Tonkatsu: ,
//   MonteCristo: ,
//   HamCheese: ,
//   FalafelPita: ,
//   ChickenSalad: ,
//   VeggieHummus: ,
//   Bologna: ,
//   ItalianBeef: ,
//   KentuckyHotBrown: ,
//   Liverwurst: 
// }