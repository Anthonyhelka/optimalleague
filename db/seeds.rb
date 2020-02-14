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
