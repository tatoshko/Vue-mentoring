import { app } from "@/main";

export const openDialog = (component, header) => {
  let resolve;

  const promise = new Promise((ok) => {
    resolve = ok;
  });

  const dialog = app.config.globalProperties;
  dialog.$dialog.open(component, {
    props: {
      header,
      draggable: false,
      style: {
        width: "50vw",
      },
      breakpoints: {
        "960px": "75vw",
        "640px": "90vw",
      },
      modal: true,
    },
    onClose: (options) => {
      resolve(options);
    },
  });
  return promise;
};
