// const seedWholeFoodsData = require('./wholeFoodsSeeds');
// const { WholeFoodsWeeklyArchive } = require('../models');
// const wholeFoodsWeeklyArchiveSeeds = require('./wholeFoodsWeeklyArchiveSeeds.json');
// const wholeFoodsTimeframeDataSeeds = require('./wholeFoodsTimeframeDataSeeds.json');
// const simmerSasoSeeds = require('./simmerSasoSeeds.json');
const { WholeFoodsTimeframeData } = require('../models');
const wfmTimeframeSeed = require('./wfmTimeframeSeed.json');

const sequelize = require('../config/connection');

// const seedWholeFoodsWeeklyArchive = () =>
//   WholeFoodsWeeklyArchive.bulkCreate(wholeFoodsWeeklyArchiveSeeds);

const seedWholeFoodsTimeframeData = () =>
  WholeFoodsTimeframeData.bulkCreate(wfmTimeframeSeed);

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // await seedWholeFoodsData();
  // console.log('\n----- WHOLE FOODS DATA SEEDED -----\n');

  // await seedWholeFoodsWeeklyArchive();
  // console.log('\n----- WHOLE FOODS WEEKLY ARCHIVE SEEDED -----\n');

  await seedWholeFoodsTimeframeData();
  console.log('\n----- WHOLE FOODS TIMEFRAME DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();
