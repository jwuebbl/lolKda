import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-kda-input-form',
  templateUrl: './kda-input-form.component.html',
  styleUrls: ['./kda-input-form.component.css']
})
export class KdaInputFormComponent {
  constructor(private http: HttpClient) {}
  kills: number = 0;
  deaths: number = 0;
  assists: number = 0;
  numOfAttempts: number = 0;
  selectedCharacter: String = "";
  leageCharacters: String[] = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Draven", "Dr. Mundo", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"];

  resetAllFields() {
    this.kills = 0;
    this.deaths = 0;
    this.assists = 0;
    this.numOfAttempts = 0;
    (<HTMLInputElement>document.getElementById("kills")).style.backgroundColor = "White";
    (<HTMLInputElement>document.getElementById("deaths")).style.backgroundColor = "White";
    (<HTMLInputElement>document.getElementById("assists")).style.backgroundColor = "White";
    (<HTMLInputElement>document.getElementById("char")).style.backgroundColor = "White";
  }

  kdaSubmit() {
    console.log(this.selectedCharacter);
    if (this.selectedCharacter == "") {
      (<HTMLInputElement>document.getElementById("char")).style.backgroundColor = "Red";
    } else if (this.kills < 0) {
        (<HTMLInputElement>document.getElementById("kills")).style.backgroundColor = "Red";
    } else if (this.deaths < 0) {
        (<HTMLInputElement>document.getElementById("deaths")).style.backgroundColor = "Red";
    } else if (this.assists < 0) {
        (<HTMLInputElement>document.getElementById("assists")).style.backgroundColor = "Red";
    } else {
        const observer = {
          next: (response: any) => {
            console.log('POST request successful:', response);
            this.resetAllFields();
          },
          error: (error: any) => {
            console.log('POST request error:', error);
            this.numOfAttempts++;
            (<HTMLInputElement>document.getElementById("errorMessage")).innerText = "There was an error POSTing the data. Please try again. Number of attempts: " + this.numOfAttempts;
          }
        };
        var data = {
        char: this.selectedCharacter,
        kills: this.kills,
        deaths: this.deaths,
        assists: this.assists
        };
        this.http.post('http://whoisthebigdog.com:80/submitLeagueGame', data).subscribe(observer);
    } 
  }
}
