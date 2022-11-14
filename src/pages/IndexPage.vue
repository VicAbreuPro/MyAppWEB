<template>
  <q-page class="flex flex-center">
    <q-card flat bordered class="my-card-large">
      <q-item>
        <q-item-section>
          <q-item-label>Form</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <StandardForm v-bind:fields="formFields"></StandardForm>
        <!-- v-bind:fields="formFields" -->
        <div class="row">
          <div class="col">DDD</div>
          <div class="col">CCC</div>
        </div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>Set Dark Mode</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <ToggleField v-model="darkMode" label="Set Dark Mode" />
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>CheckboxField</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <CheckboxField v-model="darkMode" label="Set Dark Mode" />
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>StandardButton</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <StandardButton
          v-on:click="standardButtonClick()"
          label="Click Me"
        ></StandardButton>
        <q-separator />
        <SaveButton
          v-on:click="standardButtonClick()"
          label="Click Save"
        ></SaveButton>
        <q-separator />
        <CancelButton
          v-on:click="cancelButtonClick()"
          label="Click Cancel"
        ></CancelButton>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-badge color="secondary" multi-line>
          Model: "{{ standardButtonValue }}"
        </q-badge>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>TextField</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <TextField v-model="textFieldValue" label="Text Field"></TextField>
      </q-card-section>
      <q-separator />
      <q-card-section>
        {{ textFieldValue }}
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>TextAreaField</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <TextAreaField
          v-model="textAreaFieldValue"
          label="Text Area Field"
        ></TextAreaField>
      </q-card-section>
      <q-separator />
      <q-card-section>
        {{ textAreaFieldValue }}
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>DateField</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <DateField v-model="dateFieldValue" label="Date Field"></DateField>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-badge color="secondary" multi-line>
          Model: "{{ dateFieldValue }}"
        </q-badge>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>TimeField</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <TimeField v-model="timeFieldValue" label="Time Field"></TimeField>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-badge color="secondary" multi-line>
          Model: "{{ timeFieldValue }}"
        </q-badge>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>SelectField</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <SelectField
          v-model="selectFieldValue"
          v-bind:options="options"
          label="Select Field"
        ></SelectField>
      </q-card-section>
      <q-separator />
      <q-card-section>
        {{ textFieldValue }}
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-badge color="secondary" multi-line>
          Model: "{{ selectFieldValue }}"
        </q-badge>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TextField from "src/components/TextField.vue";
import TextAreaField from "src/components/TextAreaField.vue";
import ToggleField from "src/components/ToggleField.vue";
import SelectField from "src/components/SelectField.vue";
import TimeField from "src/components/TimeField.vue";
import DateField from "src/components/DateField.vue";
import CheckboxField from "src/components/CheckboxField.vue";
import StandardButton from "src/components/StandardButton.vue";
import SaveButton from "src/components/SaveButton.vue";
import CancelButton from "src/components/CancelButton.vue";

import StandardForm from "src/components/StandardForm.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    TextField,
    ToggleField,
    SelectField,
    TextAreaField,
    TimeField,
    DateField,
    CheckboxField,
    StandardButton,
    SaveButton,
    CancelButton,
    StandardForm,
  },
  data() {
    const formFields = [
      {
        xs: 12,
        sm: 6,
        md: 3,
        // lg: 2,
        // xl: 1,
        fields: [],
      },
      {
        xs: 12,
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6,
        fields: [],
      },
    ];

    return {
      formFields,
      textFieldValue: "",
      textAreaFieldValue: "",
      selectFieldValue: null,
      timeFieldValue: "12:34",
      dateFieldValue: null,
      standardButtonValue: 0,
      options: [
        {
          id: "goog",
          description: "Google",
        },
        {
          id: "fb",
          description: "Facebook",
        },
        {
          id: "twt",
          description: "Twitter",
        },
        {
          id: "app",
          description: "Apple",
        },
        {
          id: "ora",
          description: "Oracle",
          disabled: true,
        },
      ],
    };
  },
  computed: {
    darkMode: {
      get() {
        return this.$q.dark.isActive;
      },
      set(v) {
        this.$q.dark.set(v);
      },
    },
  },
  watch: {
    timeFieldValue(v) {
      console.log(v);
    },
  },
  methods: {
    toogleDarkMode() {},
    standardButtonClick() {
      this.standardButtonValue++;
    },
    cancelButtonClick() {
      this.standardButtonValue--;
    },
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
.my-card-large
  width: 100%
  max-width: 900px
</style>
