import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StaticDataService } from '../../../services/static-data.service';

@Component({
  selector: 'app-choice-tag',
  templateUrl: './choice-tag.component.html',
  styleUrls: ['./choice-tag.component.scss']
})
export class ChoiceTagComponent implements OnInit {

  tags = [];
  selectedTags;

  @Input() selectedTagsSaved;
  @Output() modalClose = new EventEmitter();
  @Output() modalSelectTag = new EventEmitter();

  constructor(
    public sds: StaticDataService
  ) { 
    this.tags = this.sds.tags;
  }

  ngOnInit() {
    this.selectedTags = this.selectedTagsSaved || new Set();
  }

  clickClose() {
    this.modalClose.emit();
  }

  clickOk() {
    this.modalSelectTag.emit(this.selectedTags);
  }

  selectTag(tag) {
		if (this.selectedTags.has(tag)) {
			this.selectedTags.delete(tag);
		} else {
			this.selectedTags.add(tag);
		}
	}

}
