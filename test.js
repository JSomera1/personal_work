function edamage() {
    if (person.name == 'Alex') {
        enemy.health = enemy.health - person.attack
        enemyhealth = enemy.health
        document.getElementById('playeraction').innerHTML = 'Shield Bash!'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
    else if (person.name == 'Jian') {
        enemy.health = enemy.health - person.attack
        enemyhealth = enemy.health
        document.getElementById('playeraction').innerHTML = 'Brawl!'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
    else if (person.name == 'Jorge') {
        enemy.health = enemy.health - person.attack
        enemyhealth = enemy.health
        document.getElementById('playeraction').innerHTML = 'Smirk!'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
    else if (person.name == 'Khoi') {
        enemy.health = enemy.health - person.attack
        enemyhealth = enemy.health
        document.getElementById('playeraction').innerHTML = 'Gulp!'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
};
function edamage2() {
    if (person.name == 'Alex') {
        enemy.health = enemy.health - person.attack * 3
        enemyhealth = enemy.health
        enemy.health = enemyhealth - 50
        enemyhealth = enemy.health
        document.getElementById('playeraction').innerHTML = 'Sacrifice'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
    else if (person.name == 'Jian') {
        enemy.health = enemy.health - (person.attack + 10)
        enemyhealth = enemy.health
        document.getElementById('playeraction').innerHTML = 'Signature'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
    else if (person.name == 'Jorge') {
        enemy.health = enemy.health - person.attack
        enemyhealth = enemy.health
        enemy.health = enemyhealth + 10
        enemyhealth = enemy.health
        document.getElementById('playeraction').innerHTML = 'Troll'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
    else if (person.name == 'Khoi') {
        enemy.health = enemy.health - person.attack * 3
        enemyhealth = enemy.health
        enemy.health = enemyhealth - 50
        enemyhealth = enemy.health
        document.getElementById('playeraction').innerHTML = 'Sacrifice'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
};
function edamage3() {
    if (person.name == 'Alex') {
        person.health = 0
        enemy.health = 0 
        document.getElementById('playeraction').innerHTML = 'Self Descrutct'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
    else if (person.name == 'Jian') {
        enemy.thorns = enemy.thorns * 2
        document.getElementById('playeraction').innerHTML = 'Spikes'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
    else if (person.name == 'Jorge') {
        person.attack = person.attack * 5
        enemy.health = 25
        enemyhealth = enemy.health
        document.getElementById('playeraction').innerHTML = 'Last Resort'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
    else if (person.name == 'Khoi') {
        enemy.heal = enemy.heal * 2
        enemy.health = enemyhealth - 25
        enemyhealth = enemy.health
        document.getElementById('playeraction').innerHTML = 'BIGGER GULP'
        document.getElementById('playeraction').style.color = 'rgb(204, 16, 16)'
        if (enemy.health % 2 >= .5) {
            //rounds up
            enemy.health = (enemy.health - enemy.health % 2) + 1
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
        else {
            enemy.health = (enemy.health - enemy.health % 2)
            enemyhealth = enemy.health
            if (enemy.health <= 0) {
                enemy.health = 0
                enemyhealth = enemy.health
                enemy.canHeal = false
            }
        }
    }
};