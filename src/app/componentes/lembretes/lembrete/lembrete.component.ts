import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Lembrete } from '../../../interface/lembrete';
import { interval, Subscription } from 'rxjs';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-lembrete',
  templateUrl: './lembrete.component.html',
  styleUrls: ['./lembrete.component.css']
})
export class LembreteComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() lembrete: Lembrete = {
    id: 0,
    titulo: '',
    descricao: '',
    prioridade: '',
    data: new Date(),
    modelo: ''
  };

  intervalo: Subscription | undefined;
  audioPlayer: HTMLAudioElement | undefined;
  audioLoaded: boolean = false;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    if (this.lembrete.data) {
      this.intervalo = interval(1000).subscribe(() => {
        const dataAtual = this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm');
        if (dataAtual && dataAtual >= this.lembrete.data.toString()) {
          if (this.intervalo) {
            this.intervalo.unsubscribe();
          }
          this.playAudio();
          setTimeout(() => {
            alert(`${this.lembrete.titulo}\nprioridade: ${this.lembrete.prioridade}`);
            this.pauseAudio();
            window.focus();
          }, 1000);
        }
      });
    }
  }

  ngAfterViewInit() {
    this.audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    this.audioPlayer.addEventListener('loadeddata', () => {
      this.audioLoaded = true;
    });
  }

  ngOnDestroy() {
    if (this.intervalo) {
      this.intervalo.unsubscribe();
    }
    this.pauseAudio();
  }

  larguraLembrete(): string {
    if (this.lembrete.descricao.length >= 256) {
      return 'lembrete-g';
    }
    return 'lembrete-p';
  }

  playAudio() {
    if (this.audioPlayer && this.audioLoaded) {
      this.audioPlayer.loop = true;
      this.audioPlayer.play();
    }
  }

  pauseAudio() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0;
    }
  }
}
