// Factory for creating country data
class CountryDataFactory {
  static createCountryData(name, coordinates, reproductiveData, votingData) {
    return {
      name,
      coordinates,
      reproductive: reproductiveData || [],
      voting: votingData || [],
    }
  }
}

// Comprehensive abortion/reproductive rights data
const reproductiveRightsData = {
  "United States": [
    { date: "1973", event: "Roe v. Wade legalized abortion nationwide" },
    { date: "2022", event: "Supreme Court overturned Roe v. Wade in Dobbs decision" },
    { date: "2024", event: "14 states have banned abortion with varying exceptions" },
  ],
  Canada: [
    { date: "1969", event: "Therapeutic abortion allowed under certain conditions" },
    { date: "1988", event: "Supreme Court struck down abortion law, decriminalizing abortion" },
    { date: "2024", event: "Abortion remains legal and publicly funded" },
  ],
  "United Kingdom": [
    { date: "1967", event: "Abortion Act legalized abortion under certain conditions" },
    { date: "1990", event: "Human Fertilisation and Embryology Act updated time limits" },
    { date: "2024", event: "Legal up to 24 weeks, no limit for serious risks" },
  ],
  France: [
    { date: "1975", event: "Veil Law legalized abortion" },
    { date: "2001", event: "Extended time limit to 12 weeks" },
    { date: "2024", event: "Constitutional protection for abortion rights added" },
  ],
  Germany: [
    { date: "1976", event: "Limited legalization in West Germany" },
    { date: "1992", event: "Unified abortion law after reunification" },
    { date: "2024", event: "Legal but technically still in criminal code" },
  ],
  Spain: [
    { date: "1985", event: "Limited legalization for specific cases" },
    { date: "2010", event: "Abortion on demand up to 14 weeks" },
    { date: "2024", event: "Remains legal with broad access" },
  ],
  Italy: [
    { date: "1978", event: "Law 194 legalized abortion" },
    { date: "1981", event: "Referendum confirmed the law" },
    { date: "2024", event: "Legal but with conscientious objection issues" },
  ],
  Poland: [
    { date: "1956", event: "Liberal abortion law under communist rule" },
    { date: "1993", event: "Restrictive law after fall of communism" },
    { date: "2020", event: "Constitutional Tribunal banned abortion for fetal defects" },
  ],
  Ireland: [
    { date: "1983", event: "Constitutional ban on abortion" },
    { date: "2018", event: "Referendum repealed constitutional ban" },
    { date: "2019", event: "Abortion services began" },
  ],
  Argentina: [
    { date: "2012", event: "Legal for rape and maternal health" },
    { date: "2021", event: "Legalized abortion on demand up to 14 weeks" },
    { date: "2024", event: "Implementation continues with regional variations" },
  ],
  Brazil: [
    { date: "1940", event: "Legal only for rape and maternal life" },
    { date: "2012", event: "Supreme Court allowed for anencephaly" },
    { date: "2024", event: "Remains highly restricted" },
  ],
  Mexico: [
    { date: "2007", event: "Mexico City legalized abortion" },
    { date: "2021", event: "Supreme Court declared abortion bans unconstitutional" },
    { date: "2024", event: "Legal in most states" },
  ],
  Colombia: [
    { date: "2006", event: "Constitutional Court allowed for three cases" },
    { date: "2022", event: "Decriminalized up to 24 weeks" },
    { date: "2024", event: "Implementation ongoing" },
  ],
  Chile: [
    { date: "1931", event: "Therapeutic abortion allowed" },
    { date: "1989", event: "Complete ban under Pinochet" },
    { date: "2017", event: "Limited legalization for three cases" },
  ],
  "South Africa": [
    { date: "1975", event: "Limited legalization under apartheid" },
    { date: "1997", event: "Choice on Termination of Pregnancy Act" },
    { date: "2024", event: "Liberal access but implementation challenges" },
  ],
  India: [
    { date: "1971", event: "Medical Termination of Pregnancy Act" },
    { date: "2021", event: "Extended time limits and expanded access" },
    { date: "2024", event: "Legal with broad grounds" },
  ],
  China: [
    { date: "1957", event: "Legalized as part of family planning" },
    { date: "1979", event: "One-child policy increased access" },
    { date: "2024", event: "Legal and widely available" },
  ],
  Japan: [
    { date: "1948", event: "Eugenic Protection Law allowed abortion" },
    { date: "1996", event: "Maternal Protection Law replaced eugenic law" },
    { date: "2024", event: "Legal with spousal consent requirement" },
  ],
  "South Korea": [
    { date: "1973", event: "Limited legalization" },
    { date: "2019", event: "Constitutional Court struck down ban" },
    { date: "2021", event: "New law allowing abortion up to 14 weeks" },
  ],
  Australia: [
    { date: "1969", event: "South Australia first to liberalize" },
    { date: "2019", event: "New South Wales last state to decriminalize" },
    { date: "2024", event: "Legal nationwide with state variations" },
  ],
  "New Zealand": [
    { date: "1977", event: "Contraception, Sterilisation and Abortion Act" },
    { date: "2020", event: "Abortion Legislation Act removed from Crimes Act" },
    { date: "2024", event: "Legal up to 20 weeks" },
  ],
}

// Voting rights data
const votingRightsData = {
  "United States": [
    { date: "1920", event: "19th Amendment granted women the right to vote" },
    { date: "1965", event: "Voting Rights Act protected minority women's voting" },
    { date: "2024", event: "Ongoing efforts to protect voting access" },
  ],
  Canada: [
    { date: "1916", event: "Manitoba first province to grant women's suffrage" },
    { date: "1918", event: "Federal voting rights for women" },
    { date: "1940", event: "Quebec last province to grant provincial voting rights" },
  ],
  "United Kingdom": [
    { date: "1918", event: "Limited voting rights for women over 30" },
    { date: "1928", event: "Equal voting rights with men" },
    { date: "2024", event: "Full electoral equality maintained" },
  ],
  France: [
    { date: "1944", event: "Women gained the right to vote" },
    { date: "1945", event: "First election with women voters" },
    { date: "2024", event: "Gender parity laws in politics" },
  ],
  Germany: [
    { date: "1918", event: "Women's suffrage after WWI" },
    { date: "1919", event: "First women elected to parliament" },
    { date: "2024", event: "Strong female political representation" },
  ],
  Spain: [
    { date: "1931", event: "Women's suffrage under Second Republic" },
    { date: "1977", event: "Restored after Franco dictatorship" },
    { date: "2024", event: "Gender equality laws in place" },
  ],
  Italy: [
    { date: "1945", event: "Women gained voting rights" },
    { date: "1946", event: "First election with women voters" },
    { date: "2024", event: "Continued political participation" },
  ],
  Poland: [
    { date: "1918", event: "Women's suffrage upon independence" },
    { date: "1989", event: "Democratic elections restored" },
    { date: "2024", event: "Active female political participation" },
  ],
  Ireland: [
    { date: "1918", event: "Same as UK, limited suffrage" },
    { date: "1922", event: "Full suffrage in Irish Free State" },
    { date: "2024", event: "Strong tradition of female political leaders" },
  ],
  Argentina: [
    { date: "1947", event: "Eva Perón championed women's suffrage" },
    { date: "1951", event: "First election with women voters" },
    { date: "2024", event: "Gender parity laws in politics" },
  ],
  Brazil: [
    { date: "1932", event: "Women gained the right to vote" },
    { date: "1934", event: "Constitutional guarantee of women's suffrage" },
    { date: "2024", event: "Increasing female political representation" },
  ],
  Mexico: [
    { date: "1953", event: "Women gained federal voting rights" },
    { date: "1955", event: "First federal election with women voters" },
    { date: "2024", event: "Gender parity requirements in politics" },
  ],
  Colombia: [
    { date: "1957", event: "Women gained the right to vote" },
    { date: "1958", event: "First election with women voters" },
    { date: "2024", event: "Progressive gender equality policies" },
  ],
  Chile: [
    { date: "1949", event: "Women gained the right to vote" },
    { date: "1952", event: "First presidential election with women voters" },
    { date: "2024", event: "Strong female political leadership tradition" },
  ],
  "South Africa": [
    { date: "1930", event: "White women gained voting rights" },
    { date: "1994", event: "Universal suffrage for all races and genders" },
    { date: "2024", event: "Constitutional gender equality protections" },
  ],
  India: [
    { date: "1950", event: "Universal adult suffrage in Constitution" },
    { date: "1952", event: "First general election with women voters" },
    { date: "2024", event: "Reservation policies for women in local government" },
  ],
  China: [
    { date: "1949", event: "Women's suffrage established with PRC" },
    { date: "1954", event: "Constitutional guarantee of gender equality" },
    { date: "2024", event: "Increasing female representation in government" },
  ],
  Japan: [
    { date: "1945", event: "Women's suffrage granted after WWII" },
    { date: "1946", event: "First election with women voters" },
    { date: "2024", event: "Efforts to increase female political participation" },
  ],
  "South Korea": [
    { date: "1948", event: "Women's suffrage in new constitution" },
    { date: "1950", event: "First election with women voters" },
    { date: "2024", event: "First female president elected (2013-2017)" },
  ],
  Australia: [
    { date: "1902", event: "Federal women's suffrage (white women)" },
    { date: "1962", event: "Indigenous women gained voting rights" },
    { date: "2024", event: "Strong female political representation" },
  ],
  "New Zealand": [
    { date: "1893", event: "First self-governing country to grant women's suffrage" },
    { date: "1919", event: "Women gained right to stand for parliament" },
    { date: "2024", event: "History of female prime ministers" },
  ],
}

// Country coordinates (approximate positions on the map)
const countryCoordinates = {
  "United States": { x: 20, y: 35 },
  Canada: { x: 15, y: 25 },
  "United Kingdom": { x: 48, y: 28 },
  France: { x: 50, y: 32 },
  Germany: { x: 52, y: 30 },
  Spain: { x: 47, y: 38 },
  Italy: { x: 52, y: 38 },
  Poland: { x: 55, y: 30 },
  Ireland: { x: 46, y: 28 },
  Argentina: { x: 32, y: 75 },
  Brazil: { x: 35, y: 60 },
  Mexico: { x: 18, y: 45 },
  Colombia: { x: 28, y: 52 },
  Chile: { x: 30, y: 78 },
  "South Africa": { x: 55, y: 78 },
  India: { x: 72, y: 48 },
  China: { x: 78, y: 38 },
  Japan: { x: 88, y: 38 },
  "South Korea": { x: 85, y: 38 },
  Australia: { x: 85, y: 82 },
  "New Zealand": { x: 92, y: 88 },
}

// Create country data using factory
const countriesData = {}
Object.keys(countryCoordinates).forEach((country) => {
  countriesData[country] = CountryDataFactory.createCountryData(
    country,
    countryCoordinates[country],
    reproductiveRightsData[country],
    votingRightsData[country],
  )
})
