import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,RouterModule],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports:[HeaderComponent, FooterComponent, SidebarComponent]
})
export class SharedModule {}
