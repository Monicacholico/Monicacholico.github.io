const filteredLevel = document.getElementById('filter-level').value;
const filteredType = document.getElementById('filter-type').value;

// document.getElementById('filter-level').value = filter.type;
// console.log(filteredLevel);

let filter = {
    type: filteredType,
    level: filteredLevel
}

let pointeShoes = [
    {
        name: 'Alpha',
        brand: 'Bloch',
        type: 'Egyptian',
        level: 'Advanced'
    },
    {
        name: 'Elite',
        brand: 'Grishko',
        type: 'Giselle',
        level: 'Intermediate'
    },
    {
        name: 'Balance',
        brand: 'Bloch',
        type: 'Giselle',
        level: 'Beginner'
    },
    {
        name: 'Contempora',
        brand: 'Capezio',
        type: 'Greek',
        level: 'Beginner'
    },
    {
        name: 'Recital',
        brand: 'Sansha',
        type: 'Giselle',
        level: 'Intermediate'
    },
    {
        name: 'Juliet',
        brand: 'Capulet',
        type: 'Giselle',
        level: 'Advanced'
    }
]

const recentPointeShoes =
[
  {
    "brand": "Grishko (Nikolay)",
    "models": [
      {
        "name": "2007",
        "type": "Classic",
        "level": "Intermediate to Professional",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Slightly tapered",
        "notes": "Best-selling model; medium platform; flexible shank options."
      },
      {
        "name": "Nova",
        "type": "Classic",
        "level": "Intermediate to Professional",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Slightly tapered",
        "notes": "Soft roll-through; designed for high arches."
      },
      {
        "name": "Maya I",
        "type": "Classic",
        "level": "Advanced to Professional",
        "foot_type": ["Greek", "Giselle"],
        "box_shape": "Slightly tapered",
        "notes": "Lightweight; for narrow feet and high insteps."
      },
      {
        "name": "Maya II",
        "type": "Classic",
        "level": "Advanced to Professional",
        "foot_type": ["Giselle", "Square"],
        "box_shape": "Square",
        "notes": "Wider platform than Maya I; good for square toes."
      },
      {
        "name": "Elite",
        "type": "Classic",
        "level": "Intermediate to Professional",
        "foot_type": ["Square", "Giselle"],
        "box_shape": "Square",
        "notes": "Generous box; excellent for square toes."
      },
      {
        "name": "DreamPointe 2007",
        "type": "Pre-arched",
        "level": "Intermediate to Professional",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Slightly tapered",
        "notes": "Pre-arched shank; more flexible and ready to wear."
      }
    ]
  },
  {
    "brand": "Bloch",
    "models": [
      {
        "name": "Heritage",
        "type": "Classic",
        "level": "Intermediate to Professional",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Tapered",
        "notes": "Inspired by Russian pointe shoes; V-shaped vamp."
      },
      {
        "name": "Balance European",
        "type": "Classic",
        "level": "Beginner to Intermediate",
        "foot_type": ["Giselle", "Square"],
        "box_shape": "Square",
        "notes": "Generous platform; easier balance for beginners."
      },
      {
        "name": "Serenade",
        "type": "Classic",
        "level": "Intermediate to Professional",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Slightly tapered",
        "notes": "Long vamp; supports flexible arches."
      },
      {
        "name": "Swan",
        "type": "Classic",
        "level": "Advanced",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Slightly tapered",
        "notes": "Low profile box; lightweight feel."
      },
      {
        "name": "Aspiration",
        "type": "Classic",
        "level": "Advanced Students",
        "foot_type": ["Giselle", "Square"],
        "box_shape": "Square",
        "notes": "Strong shank; stable platform."
      },
      {
        "name": "Amelie",
        "type": "Classic",
        "level": "Beginner",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Tapered",
        "notes": "Soft shank; designed for dancers new to pointe."
      }
    ]
  },
  {
    "brand": "Russian Pointe",
    "models": [
      {
        "name": "Almaz",
        "type": "Classic",
        "level": "Intermediate to Professional",
        "foot_type": ["Giselle", "Square"],
        "box_shape": "Square",
        "notes": "Broad toe platform; versatile fit."
      },
      {
        "name": "Brava",
        "type": "Classic",
        "level": "Intermediate to Professional",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Slightly tapered",
        "notes": "Slightly tapered box for a snug fit."
      },
      {
        "name": "Rubin",
        "type": "Classic",
        "level": "Professional",
        "foot_type": ["Giselle", "Square"],
        "box_shape": "Square",
        "notes": "Very popular; supportive and stable."
      },
      {
        "name": "Sapfir",
        "type": "Classic",
        "level": "Advanced to Professional",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Slightly tapered",
        "notes": "Sleek profile; long vamp."
      }
    ]
  },
  {
    "brand": "Capezio",
    "models": [
      {
        "name": "Ava",
        "type": "Classic",
        "level": "Intermediate to Professional",
        "foot_type": ["Giselle", "Square"],
        "box_shape": "Square",
        "notes": "Broad, flat platform; supportive shank."
      },
      {
        "name": "Glissé",
        "type": "Classic",
        "level": "Beginner to Intermediate",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Slightly tapered",
        "notes": "Low profile; snug heel fit."
      },
      {
        "name": "Contempora",
        "type": "Classic",
        "level": "Intermediate to Professional",
        "foot_type": ["Greek", "Giselle"],
        "box_shape": "Slightly tapered",
        "notes": "Narrow heel; high and snug arch."
      },
      {
        "name": "Phoenix",
        "type": "Classic",
        "level": "Advanced",
        "foot_type": ["Egyptian", "Greek"],
        "box_shape": "Slightly tapered",
        "notes": "Modern construction; lightweight materials."
      },
      {
        "name": "Airess",
        "type": "Pre-arched",
        "level": "Professional",
        "foot_type": ["Giselle", "Square"],
        "box_shape": "Square",
        "notes": "Ultra-light; ventilated insole."
      }
    ]
  }
]


function pointeShoesResult(){
    pointeShoes = pointeShoes.filter( item => {
        for(const key in filter) {
            // let myValue = filter[key].toLowerCase();
            // console.log(myValue);
            if(item[key] === undefined || item[key] != filter[key])
                return false;
            }
            return true;
        });
        console.log(pointeShoes);
    }


// function pointeShoesResult() {
//     pointeShoes.filter(function(item){
//         for(const key in filter) {
//             if(item[key] === undefined || item[key] != filter[key])
//             return false
//         }
//         return true;
    
//     });
//     console.log(pointeShoesResult);
// }
searchBtn.addEventListener('click', pointeShoesResult);
