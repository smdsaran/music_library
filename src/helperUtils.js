import moment from "moment";

export const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [hrs, mins, secs]
        .map(unit => String(unit).padStart(2, "0"))
        .join(":");
  } 

export const bytesToMB = (bytes) => {
    return Math.floor(bytes / (1024 * 1024)) + " MB";
  }

export function formatReleaseDate(dateString) {
    return moment(dateString).format("DD MMM YYYY, hh:mm A");
}