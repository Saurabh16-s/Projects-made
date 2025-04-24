from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput
from kivy.uix.popup import Popup
from kivy.uix.spinner import Spinner
from kivy.core.window import Window
from kivy.graphics import Color, Rectangle

Window.size = (400, 600)

class CareerCoachApp(App):
    def build(self):
        self.layout = BoxLayout(orientation='vertical', padding=20, spacing=10)

        with self.layout.canvas.before:
            Color(1, 1, 1, 1)  # White background
            self.rect = Rectangle(size=self.layout.size, pos=self.layout.pos)
        self.layout.bind(size=self._update_rect, pos=self._update_rect)

        # Name input
        self.name_input = TextInput(
            hint_text="What's Your Name?",
            multiline=False,
            size_hint_y=None,
            height=50,
            background_color=(0.2, 0.2, 0.2, 1),
            foreground_color=(0.5, 1, 0.5, 1),
            hint_text_color=(0.8, 0.8, 0.8, 1)
        )
        self.layout.add_widget(self.name_input)

        # Interest label
        self.layout.add_widget(Label(
            text="Which Field Are You Interested In",
            color=(0, 0, 0, 1)
        ))

        # Interest dropdown (spinner)
        self.interest_spinner = Spinner(
            text='Select Interest Area',
            values=("Tech", "Healthcare", "Art & Media", "Business", "Sports"),
            size_hint_y=None,
            height=50,
            background_color=(0.1, 0.6, 1, 1),
            color=(1, 1, 1, 1)
        )
        self.layout.add_widget(self.interest_spinner)

        # Submit button
        submit_button = Button(
            text="Get Advice",
            size_hint_y=None,
            height=50,
            background_color=(0.3, 0.7, 0.4, 1),
            color=(1, 1, 1, 1)
        )
        submit_button.bind(on_press=self.show_popup)
        self.layout.add_widget(submit_button)

        return self.layout

    def _update_rect(self, instance, value):
        self.rect.pos = instance.pos
        self.rect.size = instance.size

    def show_popup(self, instance):
        name = self.name_input.text.strip()
        interest = self.interest_spinner.text

        if not name or interest == "Select Interest Area":
            message = "Please enter your name and select an interest area."
        else:
            message = f"Hi {name}! Explore opportunities in {interest}."

        popup = Popup(title="Career Advice",
                      content=Label(text=message),
                      size_hint=(None, None), size=(300, 200))
        popup.open()

if __name__ == '__main__':
    CareerCoachApp().run()

   