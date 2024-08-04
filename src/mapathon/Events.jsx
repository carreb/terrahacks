export const events = [
  {
    id: 1,
    type: 'Disaster',
    description: 'A severe drought has reduced water availability.',
    impact: {
      waterLevels: -20,      // Decrease water levels by 20%
      environmentalHP: -10,  // Decrease environmental HP by 10%
      doomsdayBar: 5         // Increase doomsday bar by 5%
    }
  },
  {
    id: 2,
    type: 'Help',
    description: 'A new policy to reduce carbon emissions has been implemented.',
    impact: {
      environmentalHP: 10,   // Increase environmental HP by 10%
      resources: -50         // Decrease resources by 50 (policy cost)
    }
  },
  {
    id: 3,
    type: 'Disaster',
    description: 'A major hurricane has caused significant damage to infrastructure.',
    impact: {
      infrastructure: -30,   // Reduce infrastructure effectiveness by 30%
      environmentalHP: -20,  // Decrease environmental HP by 20%
      doomsdayBar: 10        // Increase doomsday bar by 10%
    }
  },
  {
    id: 4,
    type: 'Help',
    description: 'Public protests have led to increased environmental regulations.',
    impact: {
      environmentalHP: 15,   // Increase environmental HP by 15%
      resources: -30         // Decrease resources by 30 (cost of regulations)
    }
  }
];
