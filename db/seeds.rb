#Clear DB
League.delete_all
Group.delete_all
Team.delete_all
Player.delete_all

#Leagues
fcs = League.create(
  id: 1,
  name: "FCS",
  min_rank: "Diamond",
  max_rank: "Challenger",
  standings_url: "https://docs.google.com/spreadsheets/d/1zNYbE2EJAukcCPyMqprGkImY_yEDKsUZ0Si6fXF5flw/edit#gid=502036779",
  stats_url: "https://docs.google.com/spreadsheets/d/1UoWaYbxfrifyPt_UppYaJWFoxTs6seatC-VTXM6yodw/edit?ouid=109252324804232781552&usp=sheets_home&ths=true"
)
fcs_group_1 = Group.create(league_id: 1, id: 1, name: "Division I")
fcs_group_2 = Group.create(league_id: 1, id: 2, name: "Division II")
fcs_group_3 = Group.create(league_id: 1, id: 3, name: "Division III")
fcs_group_4 = Group.create(league_id: 1, id: 4, name: "Division IV")

propel = League.create(
  id: 2,
  name: "Propel",
  min_rank: "Gold",
  max_rank: "Platinum",
  standings_url: "https://docs.google.com/spreadsheets/d/19fk8JRt06CmpYYXVSY1yQ0U1-FuzowZblrji-ReDpRw/edit",
  stats_url: "https://docs.google.com/spreadsheets/d/1DSFYCi9ZReJa9k6shif-ebPzwt3Q14dkXJIIyeyCx70/edit?ouid=109252324804232781552&usp=sheets_home&ths=true"
)
propel_group_1 = Group.create(league_id: 2, id: 5, name: "Group A")
propel_group_2 = Group.create(league_id: 2, id: 6, name: "Group B")
propel_group_3 = Group.create(league_id: 2, id: 7, name: "Group C")
propel_group_4 = Group.create(league_id: 2, id: 8, name: "Group D")
propel_group_5 = Group.create(league_id: 2, id: 9, name: "Group E")
propel_group_6 = Group.create(league_id: 2, id: 10, name: "Group F")

aspire = League.create(
  id: 3,
  name: "Aspire",
  min_rank: "Silver",
  max_rank: "Gold",
  standings_url: "https://docs.google.com/spreadsheets/d/10CJvxgRL1KUWpfFWpEHljLD-4YOo54KSkPKMhmu56cw/edit",
  stats_url: "https://docs.google.com/spreadsheets/d/1suWEiFGbmGoOb6POlruNqnqTfFQ-VZgGdn0jZa1Izos/edit#gid=937186065"
)
aspire_group_1 = Group.create(league_id: 3, id: 11, name: "Group A")
aspire_group_2 = Group.create(league_id: 3, id: 12, name: "Group B")
