import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-kda-input-form',
  templateUrl: './kda-input-form.component.html',
  styleUrls: ['./kda-input-form.component.css']
})
export class KdaInputFormComponent {
  constructor(private http: HttpClient) {}
  username: String = "";
  kills: number = 0;
  deaths: number = 0;
  assists: number = 0;
  numOfAttempts: number = 0;
  numOfSuccessfulPosts: number = 0;
  selectedCharacter: String = "";
  winLoss: String = "";
  leageCharacters: String[] = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Draven", "Dr. Mundo", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"];
  leagueGamesScoreboard: any;

  ngOnInit() {
    const usernameObserver = {
      next: (response: any) => {
        this.username = response['username'];
      },
      error: (error: any) => {
        console.log('POST request error:', error);
      }
    };
    this.http.get('/username').subscribe(usernameObserver)

    const scoreBoardObserver = {
      next: (response: any) => {
        this.leagueGamesScoreboard = response;
      },
      error: (error: any) => {
        console.log('POST request error:', error);
      }
    };
    this.http.get('/leagueScoreBoard').subscribe(scoreBoardObserver)
  }

  updateTable() {
    const scoreBoardObserver = {
      next: (response: any) => {
        this.leagueGamesScoreboard = response;
      },
      error: (error: any) => {
        console.log('POST request error:', error);
      }
    };
    this.http.get('/leagueScoreBoard').subscribe(scoreBoardObserver)
  }

  resetAllFields(clicked:boolean) {
    this.kills = 0;
    this.deaths = 0;
    this.assists = 0;
    this.selectedCharacter = "";
    this.winLoss = "";
    (<HTMLInputElement>document.getElementById("kills")).style.backgroundColor = "White";
    (<HTMLInputElement>document.getElementById("deaths")).style.backgroundColor = "White";
    (<HTMLInputElement>document.getElementById("assists")).style.backgroundColor = "White";
    (<HTMLInputElement>document.getElementById("char")).style.backgroundColor = "White";
    (<HTMLInputElement>document.getElementById("winLoss")).style.backgroundColor = "White";
    if (clicked == true) {
      (<HTMLInputElement>document.getElementById("statusMessage")).innerText = "";
    }
  }

  kdaSubmit() {
    if (this.selectedCharacter == "") {
      (<HTMLInputElement>document.getElementById("char")).style.backgroundColor = "Red";
    } else if (this.winLoss == "") {
      (<HTMLInputElement>document.getElementById("winLoss")).style.backgroundColor = "Red";
    } else if (this.kills < 0) {
      (<HTMLInputElement>document.getElementById("kills")).style.backgroundColor = "Red";
    } else if (this.deaths < 0) {
        (<HTMLInputElement>document.getElementById("deaths")).style.backgroundColor = "Red";
    } else if (this.assists < 0) {
        (<HTMLInputElement>document.getElementById("assists")).style.backgroundColor = "Red";
    } else {
        const observer = {
          next: (response: any) => {
            this.numOfSuccessfulPosts += 1;
            (<HTMLInputElement>document.getElementById("statusMessage")).innerText = "Data saved successfully! Number of successful POSTs: " + this.numOfSuccessfulPosts;
            let clicked = false;
            this.resetAllFields(clicked);
            this.updateTable();
          },
          error: (error: any) => {
            console.log('POST request error:', error);
            this.numOfAttempts++;
            (<HTMLInputElement>document.getElementById("statusMessage")).innerText = "There was an error POSTing the data. Please try again. Number of attempts: " + this.numOfAttempts;
          }
        };
        const data = {
        char: this.selectedCharacter,
        kills: this.kills,
        deaths: this.deaths,
        assists: this.assists,
        winLoss: this.winLoss
        };
        this.http.post('/submitLeagueGame', data).subscribe(observer);
    } 
  }
}
