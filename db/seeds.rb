#Clear DB
League.delete_all
Team.delete_all
Player.delete_all

#Leagues
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
team_1 = Team.create(
  league_id: 1,
  id: 1,
  name: "Honey BEEsports",
  tag: "BEE",
  group: "Division IV",
  wins: 0,
  losses: 1
)
#3-0 Esports
team_2 = Team.create(
  league_id: 1,
  id: 2,
  name: "3-0 Esports",
  tag: "3-0",
  group: "Division III",
  wins: 0,
  losses: 2
)
#EOU Dawn
team_3 = Team.create(
  league_id: 1,
  id: 3,
  name: "EOU Dawn",
  tag: "EOUD",
  group: "Division II",
  wins: 0,
  losses: 1
)
#Team Fish Taco Vice
team_4 = Team.create(
  league_id: 1,
  id: 4,
  name: "Team Fish Taco Vice",
  tag: "TFTV",
  group: "Division I",
  wins: 2,
  losses: 0
)
#Rated R Esports
team_5 = Team.create(
  league_id: 1,
  id: 5,
  name: "Rated R Esports",
  tag: "RRE",
  group: "Division I",
  wins: 0,
  losses: 2
)
#Team Manly Pink
team_6 = Team.create(
  league_id: 1,
  id: 6,
  name: "Team Manly Pink",
  tag: "TMP",
  group: "Division II",
  wins: 0,
  losses: 1
)
#Recon 5 Blue
team_7 = Team.create(
  league_id: 1,
  id: 7,
  name: "Recon 5 Blue",
  tag: "R5B",
  group: "Division III",
  wins: 2,
  losses: 0
)
#Lane:Zero Maelstrom
team_8 = Team.create(
  league_id: 1,
  id: 8,
  name: "Lane:Zero Maelstrom",
  tag: "LZMLS",
  group: "Division III",
  wins: 1,
  losses: 0
)
#GRIN Prestige
team_9 = Team.create(
  league_id: 1,
  id: 9,
  name: "GRIN Prestige",
  tag: "GRIN",
  group: "Division II",
  wins: 1,
  losses: 0
)
#Recon 5 Green
team_10 = Team.create(
  league_id: 1,
  id: 10,
  name: "Recon 5 Green",
  tag: "R5G",
  group: "Division I",
  wins: 2,
  losses: 0
)
#Doki Doki League Club: Yuri
team_11 = Team.create(
  league_id: 1,
  id: 11,
  name: "Doki Doki League Club:Yuri",
  tag: "DLC",
  group: "Division IV",
  wins: 1,
  losses: 1
)
#NG Orange
team_12 = Team.create(
  league_id: 1,
  id: 12,
  name: "NG Orange",
  tag: "NGO",
  group: "Division IV",
  wins: 2,
  losses: 0
)
#Lane:Zero Blizzard
team_13 = Team.create(
  league_id: 1,
  id: 13,
  name: "Lane:Zero Blizzard",
  tag: "LZBLZ",
  group: "Division II",
  wins: 1,
  losses: 0
)
#EOU T1
team_14 = Team.create(
  league_id: 1,
  id: 14,
  name: "EOU T1",
  tag: "EOUT1",
  group: "Division IV",
  wins: 0,
  losses: 1
)
#ConViction Esports
team_15 = Team.create(
  league_id: 1,
  id: 15,
  name: "ConViction Esports",
  tag: "CSV",
  group: "Division I",
  wins: 0,
  losses: 2
)
#LakeSide Gaming
team_16 = Team.create(
  league_id: 1,
  id: 16,
  name: "LakeSide Gaming",
  tag: "LSE",
  group: "Division III",
  wins: 0,
  losses: 1
)

#Propel Teams
#Exile Esports
team_17 = Team.create(
  league_id: 2,
  id: 17,
  name: "Exile Esports",
  tag: "EXE",
  group: "Group A",
  wins: 3,
  losses: 0
)
#Catalyst
team_18 = Team.create(
  league_id: 2,
  id: 18,
  name: "Catalyst",
  tag: "CAT",
  group: "Group A",
  wins: 2,
  losses: 1
)
#LU Academy
team_19 = Team.create(
  league_id: 2,
  id: 19,
  name: "LU Academy",
  tag: "LUA",
  group: "Group A",
  wins: 1,
  losses: 2
)
#SGT
team_20 = Team.create(
  league_id: 2,
  id: 20,
  name: "SGT",
  tag: "SGT",
  group: "Group A",
  wins: 0,
  losses: 3
)
#Anonymous Sapphire
team_21 = Team.create(
  league_id: 2,
  id: 21,
  name: "Anonymous Sapphire",
  tag: "AES",
  group: "Group B",
  wins: 2,
  losses: 0
)
#SmonkerZ
team_22 = Team.create(
  league_id: 2,
  id: 22,
  name: "SmonkerZ",
  tag: "MONK",
  group: "Group B",
  wins: 2,
  losses: 1
)
#WavecleaR Esports
team_23 = Team.create(
  league_id: 2,
  id: 23,
  name: "WavecleaR Esports",
  tag: "WE",
  group: "Group B",
  wins: 1,
  losses: 2
)
#Hypnotic
team_24 = Team.create(
  league_id: 2,
  id: 24,
  name: "Hypnotic",
  tag: "HYP",
  group: "Group B",
  wins: 0,
  losses: 2
)
#EOU Twilight
team_25 = Team.create(
  league_id: 2,
  id: 25,
  name: "EOU Twilight",
  tag: "EOUT",
  group: "Group C",
  wins: 3,
  losses: 0
)
#Scarlet Foxes
team_26 = Team.create(
  league_id: 2,
  id: 26,
  name: "Scarlet Foxes",
  tag: "SF",
  group: "Group C",
  wins: 2,
  losses: 1
)
#RIFT Rangers
team_27 = Team.create(
  league_id: 2,
  id: 27,
  name: "RIFT Rangers",
  tag: "RFTR",
  group: "Group C",
  wins: 1,
  losses: 2
)
#Just 5 Dudes
team_28 = Team.create(
  league_id: 2,
  id: 28,
  name: "Just 5 Dudes",
  tag: "J5D",
  group: "Group C",
  wins: 0,
  losses: 3
)
#Just 5 Dudes
team_29 = Team.create(
  league_id: 2,
  id: 29,
  name: "Just 5 Dudes",
  tag: "J5D",
  group: "Group C",
  wins: 0,
  losses: 3
)
#3-0 Esports
team_30 = Team.create(
  league_id: 2,
  id: 30,
  name: "3-0 Esports",
  tag: "3-0",
  group: "Group D",
  wins: 3,
  losses: 0
)
#Valor Bulls United
team_31 = Team.create(
  league_id: 2,
  id: 31,
  name: "Valor Bulls United",
  tag: "VBU",
  group: "Group D",
  wins: 2,
  losses: 1
)
#Team Quadra Mid
team_32 = Team.create(
  league_id: 2,
  id: 32,
  name: "Team Quadra Mid",
  tag: "TQM",
  group: "Group D",
  wins: 1,
  losses: 2
)
#BeyBlazerz
team_33 = Team.create(
  league_id: 2,
  id: 33,
  name: "BeyBlazerz",
  tag: "BB",
  group: "Group D",
  wins: 0,
  losses: 3
)
#NG Scarlet
team_34 = Team.create(
  league_id: 2,
  id: 34,
  name: "NG Scarlet",
  tag: "NGS",
  group: "Group E",
  wins: 2,
  losses: 0
)
#ANON Ruby
team_35 = Team.create(
  league_id: 2,
  id: 35,
  name: "ANON Ruby",
  tag: "RUBY",
  group: "Group E",
  wins: 2,
  losses: 1
)
#GRIN Legacy
team_36 = Team.create(
  league_id: 2,
  id: 36,
  name: "GRIN Legacy",
  tag: "GL",
  group: "Group E",
  wins: 1,
  losses: 1
)
#TMP Propel
team_37 = Team.create(
  league_id: 2,
  id: 37,
  name: "TMP Propel",
  tag: "TMP",
  group: "Group E",
  wins: 0,
  losses: 3
)
#Phantom5
team_38 = Team.create(
  league_id: 2,
  id: 38,
  name: "Phantom 5",
  tag: "P5",
  group: "Group F",
  wins: 3,
  losses: 0
)
#Legacy Conquerors
team_39 = Team.create(
  league_id: 2,
  id: 39,
  name: "Legacy Conquerors",
  tag: "LCQ",
  group: "Group F",
  wins: 2,
  losses: 1
)
#GRIN Eclipse
team_40 = Team.create(
  league_id: 2,
  id: 40,
  name: "GRIN Eclipse",
  tag: "GE",
  group: "Group F",
  wins: 1,
  losses: 2
)
#IDNM
team_41 = Team.create(
  league_id: 2,
  id: 41,
  name: "IDNM",
  tag: "IDNM",
  group: "Group F",
  wins: 0,
  losses: 3
)

#Aspire Teams
#Resurrection Gaming
team_42 = Team.create(
  league_id: 3,
  id: 42,
  name: "Resurrection Gaming",
  tag: "RG",
  group: "Group A",
  wins: 2,
  losses: 0
)
#Owen
team_43 = Team.create(
  league_id: 3,
  id: 43,
  name: "Owen",
  tag: "OWEN",
  group: "Group A",
  wins: 2,
  losses: 0
)
#No Flame Just Fire
team_44 = Team.create(
  league_id: 3,
  id: 44,
  name: "No Flame Just Fire",
  tag: "NFJF",
  group: "Group A",
  wins: 1,
  losses: 0
)
#NG Green
team_45 = Team.create(
  league_id: 3,
  id: 45,
  name: "NG Green",
  tag: "NGG",
  group: "Group A",
  wins: 0,
  losses: 1
)
#GRIN Genesis
team_46 = Team.create(
  league_id: 3,
  id: 46,
  name: "GRIN Genesis",
  tag: "GRIN",
  group: "Group A",
  wins: 0,
  losses: 1
)
#Dont Go Top
team_47 = Team.create(
  league_id: 3,
  id: 47,
  name: "Dont Go Top",
  tag: "DGT",
  group: "Group A",
  wins: 0,
  losses: 2
)
#Rift Warriors
team_48 = Team.create(
  league_id: 3,
  id: 48,
  name: "Rift Warriors",
  tag: "RW",
  group: "Group A",
  wins: 0,
  losses: 2
)
#Killer Gummy Bears
team_49 = Team.create(
  league_id: 3,
  id: 49,
  name: "Killer Gummy Bears",
  tag: "KGB",
  group: "Group B",
  wins: 2,
  losses: 0
)
#NG Blue
team_50 = Team.create(
  league_id: 3,
  id: 50,
  name: "NG Blue",
  tag: "NGB",
  group: "Group B",
  wins: 2,
  losses: 0
)
#RIFT Raptors
team_51 = Team.create(
  league_id: 3,
  id: 51,
  name: "RIFT Raptors",
  tag: "RFTR",
  group: "Group B",
  wins: 2,
  losses: 0
)
#EOU Midnight
team_52 = Team.create(
  league_id: 3,
  id: 52,
  name: "EOU Midnight",
  tag: "EOUM",
  group: "Group B",
  wins: 0,
  losses: 1
)
#TMP Aspire
team_53 = Team.create(
  league_id: 3,
  id: 53,
  name: "TMP Aspire",
  tag: "TMPA",
  group: "Group B",
  wins: 0,
  losses: 2
)
