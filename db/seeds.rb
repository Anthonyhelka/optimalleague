#Clear DB
League.delete_all
Team.delete_all
Player.delete_all

#League
fcs = League.create(
  id: 1,
  name: "FCS",
  min_rank: "Diamond",
  max_rank: "Challenger"
)

propel = League.create(
  id: 2,
  name: "Propel",
  min_rank: "Gold",
  max_rank: "Platinum"
)

aspire = League.create(
  id: 3,
  name: "Aspire",
  min_rank: "Silver",
  max_rank: "Gold"
)

#FCS Teams
#Honey BEEsports
honey_beesports = Team.create(
  id: 1,
  league_id: 1,
  name: "Honey BEEsports",
  tag: "BEE",
  group: "Division 4",
  wins: 0,
  losses: 1
)
axal = Player.create(
  id: 1,
  team_id: 1,
  name: "Axal",
  starter: true
)
joopsakid = Player.create(
  id: 2,
  team_id: 1,
  name: "JoopsaKid",
  starter: true
)
#Rated R Esports
rated_r_esports = Team.create(
  id: 2,
  league_id: 1,
  name: "Rated R Esports",
  tag: "RRE",
  group: "Division 1",
  wins: 0,
  losses: 1
)
cgamesrule = Player.create(
  id: 3,
  team_id: 2,
  name: "cgamesrule",
  starter: true
)
lil_cutie_vert = Player.create(
  id: 4,
  team_id: 2,
  name: "Lil Cutie Vert",
  starter: true
)
#Propel Teams
#Grin Legacy
grin_legacy = Team.create(
  id: 3,
  league_id: 2,
  name: "Grin Legacy",
  tag: "GL",
  group: "Group E",
  wins: 0,
  losses: 1
)
bubbleboi = Player.create(
  id: 5,
  team_id: 3,
  name: "BubbleBoi",
  starter: true
)
scoliosis_steve = Player.create(
  id: 6,
  team_id: 3,
  name: "Scoliosis Steve",
  starter: true
)
#Smonkerz
smonkerz = Team.create(
  id: 4,
  league_id: 2,
  name: "Smonkerz",
  tag: "MONK",
  group: "Group B",
  wins: 1,
  losses: 1
)
nevetoopro = Player.create(
  id: 7,
  team_id: 4,
  name: "NeveTooPro",
  starter: true
)
kdragv = Player.create(
  id: 8,
  team_id: 4,
  name: "KDragV",
  starter: true
)
#Aspire Teams
#Resurrection Gaming
resurrection_gaming = Team.create(
  id: 5,
  league_id: 3,
  name: "Resurrection Gaming",
  tag: "RG",
  group: "Group A",
  wins: 2,
  losses: 0
)
ferocityx = Player.create(
  id: 9,
  team_id: 5,
  name: "FerocityX",
  starter: true
)
nextstoptohell = Player.create(
  id: 10,
  team_id: 5,
  name: "NextStopToHell",
  starter: true
)
#NG Blue
ng_blue = Team.create(
  id: 6,
  league_id: 3,
  name: "NG Blue",
  tag: "NGB",
  group: "Group B",
  wins: 2,
  losses: 0
)
conflicks = Player.create(
  id: 11,
  team_id: 6,
  name: "Conflicks",
  starter: true
)
justic_face = Player.create(
  id: 12,
  team_id: 6,
  name: "Justice Face",
  starter: true
)
