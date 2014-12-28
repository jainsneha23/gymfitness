package in.stj.plugins;

import java.util.ArrayList;
import java.util.List;

import android.app.Activity;
import android.database.Cursor;
import android.provider.MediaStore;

public class Mp3Manager {

    public static List<String> getSongs(Activity activity) {
        // Some audio may be explicitly marked as not being music
        String selection = MediaStore.Audio.Media.IS_MUSIC + " != 0";

        String[] projection = { MediaStore.Audio.Media._ID,
                MediaStore.Audio.Media.ARTIST, MediaStore.Audio.Media.TITLE,
                MediaStore.Audio.Media.DATA,
                MediaStore.Audio.Media.DISPLAY_NAME,
                MediaStore.Audio.Media.DURATION };

        @SuppressWarnings("deprecation")
        Cursor cursor = activity.managedQuery(
                MediaStore.Audio.Media.EXTERNAL_CONTENT_URI, projection,
                selection, null, null);

        List<String> songs = new ArrayList<String>();
        while (cursor.moveToNext()) {
            songs.add(cursor.getString(2));
        }

        return songs;
    }
}