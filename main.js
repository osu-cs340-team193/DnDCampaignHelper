/* Monsters */
function newMonster()
{
  /* hide table view */
  document.getElementById('monstersView').style.visibility = 'collapse';

  /* show form view */
  document.getElementById('monstersFormView').style.visibility = 'visible';
}

function browseMonsters(curView)
{
  /* hide form view */
  document.getElementById(curView).style.visibility = 'collapse';

  /* show table view */
  document.getElementById('monstersView').style.visibility = 'visible';
}

function updateMonster(monsterId)
{
  /* hide table view */
  document.getElementById('monstersView').style.visibility = 'collapse';

  /* show form view */
  document.getElementById('monstersFormView').style.visibility = 'visible';

  /* populate form with sample data */
  document.getElementById('monsterName').value = 'Swarm of bats';
  document.getElementById('armorClass').value = '12';
  document.getElementById('hitPoints').value = '22';
  document.getElementById('type').selectedIndex = 1;
}

/* Actions */
function newAction()
{
  /* hide table view */
  document.getElementById('actionsView').style.visibility = 'collapse';

  /* show form view */
  document.getElementById('actionsFormView').style.visibility = 'visible';
}

function browseActions(curView)
{
  /* hide form view */
  document.getElementById(curView).style.visibility = 'collapse';

  /* show table view */
  document.getElementById('actionsView').style.visibility = 'visible';
}

function updateAction(actionId)
{
  /* hide table view */
  document.getElementById('actionsView').style.visibility = 'collapse';

  /* show form view */
  document.getElementById('actionsFormView').style.visibility = 'visible';

  /* populate form with sample data */
  document.getElementById('actionName').value = 'Bites';
  document.getElementById('monsterName').selectedIndex = 5;
  document.getElementById('description').value = 'Melee Weapon Attack: +4 to hit, reach 0ft, ...';
}

/* Items */
function newItem()
{
  /* hide table view */
  document.getElementById('itemsView').style.visibility = 'collapse';

  /* show form view */
  document.getElementById('itemsFormView').style.visibility = 'visible';
}

function browseItems(curView)
{
  /* hide form view */
  document.getElementById(curView).style.visibility = 'collapse';

  /* show table view */
  document.getElementById('itemsView').style.visibility = 'visible';
}

function updateItem(itemId)
{
  /* hide table view */
  document.getElementById('itemsView').style.visibility = 'collapse';

  /* show form view */
  document.getElementById('itemsFormView').style.visibility = 'visible';

  /* populate form with sample data */
  document.getElementById('itemName').value = 'Amulet';
  document.getElementById('value').value = '5';
  document.getElementById('weight').value = '1';
}

/* Campaigns */
function newCampaign()
{
  /* hide table view */
  document.getElementById('campaignView').style.visibility = 'collapse';

  /* show form view */
  document.getElementById('campaignFormView').style.visibility = 'visible';
}

function browseCampaigns(curView)
{
  /* hide form view */
  document.getElementById(curView).style.visibility = 'collapse';

  /* show table view */
  document.getElementById('campaignView').style.visibility = 'visible';
}

function updateCampaign(campaignId)
{
  /* hide table view */
  document.getElementById('campaignView').style.visibility = 'collapse';

  /* show form view */
  document.getElementById('campaignFormView').style.visibility = 'visible';

  /* populate form with sample data */
  document.getElementById('campaignTitle').value = 'A Deep and Creeping Darkness';
  document.getElementById('startDate').value = '2024-01-16';
  document.getElementById('endDate').value = '2024-02-22';
  document.getElementById('dungeonMaster').value = 'Marcus';
}

/* Location */
function newLocation()
{
  /* hide table view */
  document.getElementById('locationView').style.visibility = 'collapse';

  /* show form view */
  document.getElementById('locationsFormView').style.visibility = 'visible';
}

function browseLocations(curView)
{
  /* hide form view */
  document.getElementById(curView).style.visibility = 'collapse';

  /* show table view */
  document.getElementById('locationView').style.visibility = 'visible';
}

function updateLocation(locationId)
{
  /* hide table view */
  document.getElementById('locationView').style.visibility = 'collapse';

  /* show form view */
  document.getElementById('locationsFormView').style.visibility = 'visible';

  /* populate form with sample data */
  document.getElementById('campaign_id').value = '1';
  document.getElementById('locationName').value = 'Chamber of Weeping';
  document.getElementById('locationDescription').value = 'Thick, velvety black moss covers every surface...';
}