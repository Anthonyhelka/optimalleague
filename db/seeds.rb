#Clear DB
League.delete_all
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

propel = League.create(
  id: 2,
  name: "Propel",
  min_rank: "Gold",
  max_rank: "Platinum",
  standings_url: "https://docs.google.com/spreadsheets/d/19fk8JRt06CmpYYXVSY1yQ0U1-FuzowZblrji-ReDpRw/edit",
  stats_url: "https://docs.google.com/spreadsheets/d/1DSFYCi9ZReJa9k6shif-ebPzwt3Q14dkXJIIyeyCx70/edit?ouid=109252324804232781552&usp=sheets_home&ths=true"
)

aspire = League.create(
  id: 3,
  name: "Aspire",
  min_rank: "Silver",
  max_rank: "Gold",
  standings_url: "https://docs.google.com/spreadsheets/d/10CJvxgRL1KUWpfFWpEHljLD-4YOo54KSkPKMhmu56cw/edit",
  stats_url: "https://docs.google.com/spreadsheets/d/1suWEiFGbmGoOb6POlruNqnqTfFQ-VZgGdn0jZa1Izos/edit#gid=937186065"
)
